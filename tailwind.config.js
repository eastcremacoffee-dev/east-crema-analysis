/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000f9f", // Azul corporativo
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f8fafc", // slate-50
          foreground: "#475569", // slate-600
        },
        accent: {
          DEFAULT: "#e2e8f0", // slate-200
          foreground: "#334155", // slate-700
        },
        background: "#ffffff",
        foreground: "#0f172a", // slate-900
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        border: "#e2e8f0", // slate-200
        input: "#e2e8f0",
        ring: "#000f9f", // Azul corporativo
        muted: {
          DEFAULT: "#f1f5f9", // slate-100
          foreground: "#64748b", // slate-500
        },
        // Colores neutros azulados
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
}