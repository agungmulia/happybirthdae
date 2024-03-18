/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["lilita one", "sans-serif"],
        nunito: ["nunito", "sans-serif"],
        courgette: ["courgette", "cursive"],
        main: [""],
      },
      borderRadius: {
        special: "",
      },
      spacing: {
        78: "312px",
      },
      keyframes: {
        "fade-in-up": {
          from: {
            transform: "translateY(0.75rem)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0rem)",
            opacity: "1",
          },
        },
        "fade-in-down": {
          from: {
            transform: "translateY(-0.75rem)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0rem)",
            opacity: "1",
          },
        },
        "fade-in-right": {
          from: {
            transform: "translateX(-0.75rem)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0rem)",
            opacity: "1",
          },
        },
        "fade-in-left": {
          from: {
            transform: "translateX(0.75rem)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0rem)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-in-out both",
        "fade-in-down": "fade-in-down 0.5s ease-in-out both",
        "fade-in-left": "fade-in-left 0.5s ease-in-out both",
        "fade-in-right": "fade-in-right 0.5s ease-in-out both",
      },
    },
  },
  plugins: [],
}
