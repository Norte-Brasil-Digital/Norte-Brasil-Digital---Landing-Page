import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4321",
    browserName: "chromium",
    contextOptions: { reducedMotion: "reduce" },
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    trace: "retain-on-failure",
  },
  webServer: {
    command: "vp run preview --host 127.0.0.1 --port 4321",
    env: { ASTRO_PREVIEW_BACKGROUND: "1" },
    url: "http://127.0.0.1:4321",
    reuseExistingServer: !process.env.CI,
  },
});
