// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"), // Your library's entry point
      name: "JLCComponentLibrary", // Global variable name if using UMD
      fileName: (format) => `jlc-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude React and ReactDOM from the bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
