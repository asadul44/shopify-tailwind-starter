/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:"twcss-",
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
      colors: {
        primary: "#003B33",
        secondary: "#00A991",
        greenLight: "#DDF3F0",
        light: "#F6FFFE",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
