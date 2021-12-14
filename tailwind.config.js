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
        lighter: '#71d0ff',
        light: '#397fa3',
        DEFAULT: '#2b6481',
        dark: '#275a74',
      },
      red: {
        DEFAULT: '#c12400',
        dark: '#b22100',
      },
      gray: {
        lightest: '#f5f5f5',
        lighter: '#e6e6e6',
        light: '#d5d5d5',
        variant: '#999999',
        DEFAULT: '#666666',
      },
      black: {
        light: '#262626',
        DEFAULT: '#000000',
      },
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
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
        sans: ['"Raleway"', 'Arial', 'sans-serif'],
      },
      flexGrow: {
        2: 2,
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
          width: `calc(100% - ${theme('spacing.8')})`,
          maxWidth: theme('screens.xl'),
        },
      })
    },
  ],
}
