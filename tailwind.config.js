/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      textColor: {
        body: '#fafafa'
      },
      fontFamily: {
        sans: 'var(--font-open);',
        bold: 'var(--font-space);'
      },
      backgroundImage: {
        gradient: 'linear-gradient(45deg, #4f46e5, #1e1b4b);'
      },
      backgroundColor: {
        alpha: 'rgba(0,0,0,0.4);'
      }
    }
  },
  plugins: []
}
