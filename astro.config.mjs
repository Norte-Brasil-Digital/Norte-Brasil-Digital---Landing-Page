import { defineConfig } from "astro/config";

export default defineConfig({
  srcDir: "./app",
  output: "static",
  outDir: "./build/client",
  devToolbar: { enabled: false },
});
