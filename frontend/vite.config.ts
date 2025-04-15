import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Aquí puedes cambiar 'dist' por otro nombre si lo prefieres, pero por convención es 'dist'
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Redirigir las solicitudes /api al backend
    }
  }
});
