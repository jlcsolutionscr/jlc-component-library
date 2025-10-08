import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "JLCComponentLibrary",
      formats: ["es", "umd"],
      fileName: "jlc-component-library",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@emotion/react",
        "@emotion/styled",
        "@mui/material",
        "@mui/x-date-pickers",
        "tss-react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emStyled",
          "@mui/material": "MaterialUI",
          "@mui/x-date-pickers": "xDatePickers",
        },
      },
    },
  },
});
