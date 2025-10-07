// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"), // Your library's entry point
      name: "JLCComponentLibrary",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude React and ReactDOM from the bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
