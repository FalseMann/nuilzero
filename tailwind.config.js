/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          100: "#1A1A23",
          200: "#15151D",
        },
        twitchColor: "#6441a5",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
};
