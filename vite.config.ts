// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "JLCComponentLibrary",
      formats: ["es", "umd"],
      fileName: "jlc-component-library",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"], // Exclude React and ReactDOM from the bundle
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
