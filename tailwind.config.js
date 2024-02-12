/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-body)',
        bold: 'var(--font-mono)'
      },
      screens: {
        xsm: '375px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
