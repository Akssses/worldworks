module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          "dark": "#333333",
        },
      }
    },
    
    container: {
      center: true,
      padding: "0px 95px",
      screens: {
        sm: "510px",
        md: "768px",
        lg: "910px",
        xl: "1200px",
      }
    },
  },
  plugins: [],
}