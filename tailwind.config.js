/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F39C12',
        secondary: '#F28648',
        secondary_light: '#FFC260',
        primary_light: '#FFC260',
        dark: '#555555',
        
        cancelado: '#EC4343',
      },
    },
  },
  plugins: [],
}

