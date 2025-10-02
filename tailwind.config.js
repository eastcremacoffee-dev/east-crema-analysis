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
          DEFAULT: "#d97706", // amber-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f3f4f6", // gray-100
          foreground: "#374151", // gray-700
        },
        accent: {
          DEFAULT: "#fbbf24", // amber-400
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#111827", // gray-900
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        border: "#e5e7eb", // gray-200
        input: "#e5e7eb",
        ring: "#d97706", // amber-600
        muted: {
          DEFAULT: "#f9fafb", // gray-50
          foreground: "#6b7280", // gray-500
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