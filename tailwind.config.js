/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* 🎨 Brand Colors */
      colors: {
        primary: "#2563EB",   // Main Blue
        primaryLight: "#EFF6FF",
        dark: "#0F172A",
        muted: "#64748B",
      },

      /* 🔤 Fonts */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      /* 🧠 Typography Polish */
      letterSpacing: {
        tightest: "-0.04em",
      },

      lineHeight: {
        tight: "1.15",
        relaxed: "1.75",
      },

      /* 🌫️ Shadows (for cards / navbar) */
      boxShadow: {
        soft: "0 10px 30px rgba(37, 99, 235, 0.15)",
        strong: "0 20px 50px rgba(37, 99, 235, 0.25)",
      },

      /* ✨ Animations */
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
