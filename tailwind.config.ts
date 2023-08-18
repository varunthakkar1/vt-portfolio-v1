import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#061f4a',
        secondary: '#dd361c'
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)']
      },
      animation: {
        twinkle: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      }
    },
  },
  plugins: [],
}
export default config
