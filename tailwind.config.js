const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      blue: {
        DEFAULT: '#007a91',
        darker: '#006178',
      },
      red: {
        light: '#ea5c4d',
        DEFAULT: '#e50005',
      },
      yellow: {
        DEFAULT: '#fbbc04',
      },
      green: '#2fa358',
      gray: {
        lighter: '#e5e5e5',
        light: '#cccccc',
        DEFAULT: '#666666',
        dark: '#333333',
      },
      black: {
        light: '#262626',
        DEFAULT: '#000000',
      },
    },
    fontSize: {
      button: ['.875rem', '1rem'],
      input: ['1rem', '1.25rem'],
      tinier: '.75rem',
      tiny: '.875rem',
      base: '1rem',
      'headline-6': ['1.125rem', '1.5rem'],
      'headline-5': ['1.25rem', '1.75rem'],
      'headline-4': ['2.125rem', '2.25rem'],
      'headline-3': ['3rem', '3.25rem'],
      'headline-2': ['3.6875rem', '3.75rem'],
      'headline-1': ['5.9375rem', '6.25rem'],
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          '@apply mx-auto': {},
          width: 'calc(100% - 2rem)',
          maxWidth: theme('screens.xl'),
        },
      })
    },
  ],
}
