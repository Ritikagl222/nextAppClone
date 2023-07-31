/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        dmsans: ['DMSans', 'sans-serif'],
      },
      container: {
        center: true,
      },
      colors: {
        blackGrey:'#151515',
        buttonHover:'#2b2b2b',
        blue: '#082B6F',
        orange: '#f8ede3',
        tangerine: '#EA3A60',
        black: '#0F2137',
        grey: '#f8f8f8',
      },
    },
  },
  plugins: [],
}
