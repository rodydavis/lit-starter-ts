import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-starter-ts/",
  build: {
    lib: {
      entry: "src/my-element.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
