/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        skin: {
          base: "var(--text-color)",
        },
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--fill-color)",
        },
      },
    },
    fontFamily: {
      "dancing-script": ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
