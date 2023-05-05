/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '5rem',
        '2xl': '8rem',
      },
    },
  },
  plugins: [require("daisyui")],
}

