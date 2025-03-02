import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'full-svh': '100svh',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        'gray-light': {
          'gray-light-50': '#F2F2F7',
          'gray-light-100': '#E5E5EA',
          'gray-light-200': '#D1D1D6',
          'gray-light-300': '#C7C7CC',
          'gray-light-400': '#AEAEB2',
          'gray-light-500': '#8E8E93',
        },

        'gray-dark': {
          'gray-dark-50': '#1C1C1E',
          'gray-dark-100': '#232325',
          'gray-dark-200': '#3A3A3C',
          'gray-dark-300': '#48484A',
          'gray-dark-400': '#636366',
          'gray-dark-500': '#8E8E93',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
