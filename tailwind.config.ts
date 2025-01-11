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

        zinc: {
          200: '#E8E8E8',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
