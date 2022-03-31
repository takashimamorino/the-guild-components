const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      red: colors.red,
    },
    extend: {
      colors: {
        'dark-blue': '#15afd0',
        'light-blue': '#1cc8ee',
        'grayscale-line': '#e7e7e7',
        'grayscale-label': '#7f818c',
        'grayscale-placeholder': '#c4c4c4',
        'title-active': '#0b0d11',
      },
      screens: {
        xs: '360px',
      },
      zIndex: {
        1: 1,
      },
      height: {
        1.25: '0.3125rem',
        4.5: '1.125rem',
      },
      width: {
        1.25: '0.3125rem',
        4.5: '1.125rem',
        fit: 'fit-content',
      },
      minWidth: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      maxWidth: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const containerProps = {
        width: '100%',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
      };

      const newUtilities = {
        '.container-max': {
          ...containerProps,
          maxWidth: '1200px',
        },

        '.container-min': {
          ...containerProps,
          maxWidth: '1024px',
        },

        '.font-default': {
          fontFamily: 'TGCFont, sans-serif',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
