/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* ----- Tipografía global ----- */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* ----- Paleta personalizada ----- */
      colors: {
        primary: "#09090b", // Negro elegante
        secondary: "#18181b", // Gris carbón
        accent: "#2563eb", // Azul profesional
        light: "#f8f8fa", // Fondo claro del CV
        softviolet: "#6d28d9", // Violeta de acento
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },

      /* ----- Sombras y efectos ----- */
      boxShadow: {
        cv: "0 10px 24px rgba(0,0,0,0.08)",
        smooth: "0 4px 14px rgba(0,0,0,0.06)",
      },

      /* ----- Breakpoints mejorados (responsividad total) ----- */
      screens: {
        xs: "420px", // móviles pequeños
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        print: { raw: "print" }, // para estilos de impresión
      },

      /* ----- Espaciados y tamaños personalizados ----- */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      /* ----- Transiciones suaves ----- */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    // Soporte para tipografía optimizada
    require("@tailwindcss/typography"),
    // Añade utilidades de formularios si expandes el CV interactivo
    require("@tailwindcss/forms"),
  ],
};
