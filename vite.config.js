import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración de Vite optimizada para CV Digital
export default defineConfig({
  plugins: [react()],
  base: "./", // Asegura rutas relativas al exportar o subir a GitHub Pages / Vercel
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    open: true, // abre el navegador automáticamente
    port: 5174, // puerto estándar de Vite
  },
});
