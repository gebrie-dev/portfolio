module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or false or ''
  theme: {
    extend: {
      backgroundImage: {
        'red-black': 'linear-gradient(90deg, #FF0000 80%, #000000 50%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

