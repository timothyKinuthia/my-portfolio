const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {...colors, 
      truegray: colors.trueGray,
      bluegray: colors.blueGray,
      teal: colors.teal,
      lime: colors.lime,
      cyan: colors.cyan
    },
    
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover']
    },
  },
  plugins: [],
};
