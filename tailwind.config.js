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
        sans: 'var(--font-open)',
        bold: 'var(--font-space)'
      },
      backgroundImage: {
        gradient: 'linear-gradient(45deg, #4f46e5, #1e1b4b);'
      },
      backgroundColor: {
        alpha: 'rgba(0,0,0,0.4);'
      },
      screens: {
        smobile: '320px',
        mmobile: '375px',
        lmobile: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopl: '1440px',
        desktop: '1920px',
        desktopl: '2560px'  
      }
    }
  },
  plugins: []
}
