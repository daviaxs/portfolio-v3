import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        'display-xs': '24px',
        'display-sm': '30px',
        'display-md': '36px',
        'display-lg': '48px',
        'display-xl': '60px',
        'display-2xl': '72px',
      },
      borderRadius: {
        small: '6px',
        medium: '12px',
        large: '24px',
      },
      boxShadow: {
        badge: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      height: {
        'full-svh': '100svh',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        red: {
          '50': '#ED4245',
          '100': '#B6292B',
        },

        'gray-light': {
          '50': '#F2F2F7',
          '100': '#E5E5EA',
          '200': '#D1D1D6',
          '300': '#C7C7CC',
          '400': '#AEAEB2',
          '500': '#8E8E93',
        },

        'gray-dark': {
          '50': '#1C1C1E',
          '100': '#232325',
          '200': '#3A3A3C',
          '300': '#48484A',
          '400': '#636366',
          '500': '#8E8E93',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
