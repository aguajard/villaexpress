module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        verde: "#2AF183",
        hoverver: "#",
        negro: "#1D1D1B",
        negro1: "#5A5A59",
        gradverde: "#6AFFDB",
        gradverdefinal: "#5DDF8E",
        foote: "#031E47",
        griss: '#E5E5E5',
      },
    },
      fontFamily: {
        villa: ['Gurajada'],
      },
    
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
