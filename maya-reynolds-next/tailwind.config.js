/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E5747",
          dark: "#24463A",
          deep: "#1C382E",
          light: "#E7EFEA",
          mist: "#F3F7F4",
        },
        secondary: {
          DEFAULT: "#F6F1E8",
          dark: "#EAE3D6",
        },
        accent: {
          DEFAULT: "#C0714F",
          soft: "#F3E4DC",
        },
        paper: "#FCFAF6",
        ink: "#24312B",
        muted: "#5C6862",
        line: "#E2DCD2",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Infant", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Mulish", "Segoe UI", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.72rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      boxShadow: {
        card: "0 14px 34px rgba(28,56,46,.10)",
      },
      maxWidth: {
        site: "min(1480px, 92vw)",
        wide: "min(1800px, 96vw)",
      },
    },
  },
  plugins: [],
};
