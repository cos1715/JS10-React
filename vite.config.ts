import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      providers: path.resolve(__dirname, "./src/providers"),
      sections: path.resolve(__dirname, "./src/sections"),
      pages: path.resolve(__dirname, "./src/pages"),
      store: path.resolve(__dirname, "./src/store"),
      routes: path.resolve(__dirname, "./src/routes"),
    },
  },
});
