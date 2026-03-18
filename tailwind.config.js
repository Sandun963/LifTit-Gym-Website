/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(213, 163, 16)',   // Gold
        light: 'rgb(241, 240, 235)',    // Light background
        dark: 'rgb(41, 33, 19)',        // Main dark
        black: 'rgb(4, 3, 4)',          // Deep black
        gray: 'rgb(44, 44, 44)',        // Neutral gray
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};