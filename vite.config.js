import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/hermes-zapatos/",
  plugins: [tailwindcss()],
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
