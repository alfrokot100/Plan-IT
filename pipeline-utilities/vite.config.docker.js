import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import plugin from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [plugin(), tailwindcss()],
  define: {
    "process.env.API_URL": JSON.stringify(
      process.env.API_URL || "http://rekurrens-backend",
    ),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 80,
  },
});
