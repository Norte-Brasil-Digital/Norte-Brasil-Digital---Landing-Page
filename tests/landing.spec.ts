import { expect, test } from "@playwright/test";

// Keep validation local: no analytics or WhatsApp messages leave the test browser.
test.beforeEach(async ({ context }) => {
  await context.route("https://cloud.umami.is/**", (route) =>
    route.fulfill({ body: "", contentType: "application/javascript" }),
  );
});

for (const width of [320, 390, 768, 1440]) {
  test(`landing page at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveTitle(/NBD SYS.*Gestão inteligente/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Sua loja sob controle.Sua gestão mais inteligente.",
    );
    await expect(page.locator("#demo-form")).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) =>
              element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    expect(
      await page.evaluate(
        () =>
          document.fonts.check('600 16px "Poppins"') && document.fonts.check('400 16px "Inter"'),
      ),
    ).toBe(true);
    await page.screenshot({ path: `test-results/landing-${width}.png`, fullPage: true });
    expect(errors).toEqual([]);
  });
}

test("mobile menu supports keyboard, Escape, and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Menu" });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(
    page.locator("#main-navigation").getByRole("link", { name: "Funcionalidades" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#main-navigation")).not.toBeVisible();
  await toggle.click();
  await page.locator("#main-navigation").getByRole("link", { name: "Funcionalidades" }).click();
  await expect(page).toHaveURL(/#funcionalidades$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("contact form prepares a safe WhatsApp message", async ({ page }) => {
  await page.route("https://wa.me/**", (route) =>
    route.fulfill({ body: "WhatsApp test destination" }),
  );
  await page.goto("/");
  await page.getByLabel("Seu nome").fill("  João & Cia  ");
  await page.getByLabel("Nome da loja").fill("Loja + Norte");
  await page.getByLabel("Seu WhatsApp").fill("(94) 99999-0000");
  const request = page.waitForRequest((req) => req.url().startsWith("https://wa.me/"));
  await page.getByRole("button", { name: "Solicitar demonstração" }).click();
  const url = new URL((await request).url());
  expect(url.pathname).toBe("/5594991636639");
  expect(url.searchParams.get("text")).toBe(
    "Olá! Gostaria de solicitar uma demonstração do NBD SYS.\nNome: João & Cia\nEmpresa: Loja + Norte\nTelefone: (94) 99999-0000",
  );
});

test("content, navigation, FAQ and direct contact work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4321/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#main-navigation")).toBeVisible();
  await expect(page.locator("#demo-form")).not.toBeVisible();
  await expect(page.locator("#direct-contact")).toHaveAttribute(
    "href",
    /^https:\/\/wa\.me\/5594991636639\?text=/,
  );
  await page.getByText("Quais recursos o sistema oferece?", { exact: true }).click();
  await expect(page.getByText("O NBD SYS conta com vendas e PDV", { exact: false })).toBeVisible();
  await context.close();
});

test("404 is localized and links back home", async ({ page }) => {
  await page.goto("/404.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Essa página nãoestá por aqui.");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  await page.getByRole("link", { name: "Voltar ao início", exact: true }).click();
  await expect(page).toHaveURL("http://127.0.0.1:4321/");
});
