/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: "0 4px 10px rgba(0, 0, 0, 0.4)",
        service: '-10px -10px 20px rgba(0, 0, 0, 0.3), 10px 10px 20px rgba(0, 0, 0, 0.3)',
        footer: '0px -1px 20px rgba(0, 0, 0, 0.5)'
      },
      dropShadow: {
        context: "0px 0px 12px rgba(255, 255, 255, 0.5)"
      }
    },
    colors: {
      primary_black: '#181818',
      primary_light: 'rgb(255 255 255)',
      primary_yellow: '#F0D905',
      primary_form: 'rgba(196, 196, 196, 0.15)',
      primary_header: 'rgba(0, 0, 0, 0.9)'
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
