/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A100FF',
        secondary: '#460073',
        accent: '#00FFFF',
      },
      fontFamily: {
        sans: ['Graphik', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'in-out-app': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        200: '200ms',
      },
    },
  },
  plugins: [],
};