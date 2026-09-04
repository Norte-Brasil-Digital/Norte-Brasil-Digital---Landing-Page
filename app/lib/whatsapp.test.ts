import { describe, expect, it } from "vite-plus/test";
import { baseMessage, buildWhatsappHref, whatsappNumber } from "./whatsapp";

describe("buildWhatsappHref", () => {
  it("builds the default demonstration link", () => {
    const url = new URL(buildWhatsappHref());

    expect(url.origin + url.pathname).toBe(`https://wa.me/${whatsappNumber}`);
    expect(url.searchParams.get("text")).toBe(baseMessage);
    expect(url.searchParams.get("text")).toBe(
      "Olá! Gostaria de solicitar uma demonstração do NBD SYS.",
    );
  });

  it("uses the demonstration message when all optional fields are empty", () => {
    expect(buildWhatsappHref({ name: " ", business: "", phone: "  " })).toBe(buildWhatsappHref());
  });

  it("adds only the contact details that were filled", () => {
    const url = new URL(
      buildWhatsappHref({
        name: "  Ana Silva  ",
        business: "Mercado Norte",
        phone: "   ",
      }),
    );

    expect(url.searchParams.get("text")).toBe(
      `${baseMessage}\nNome: Ana Silva\nEmpresa: Mercado Norte`,
    );
  });

  it("keeps line breaks and special characters URL-safe", () => {
    const href = buildWhatsappHref({ name: "João & Cia", phone: "(94) 99999-0000" });

    expect(href).not.toContain("João & Cia");
    expect(new URL(href).searchParams.get("text")).toContain(
      "Nome: João & Cia\nTelefone: (94) 99999-0000",
    );
  });
});
