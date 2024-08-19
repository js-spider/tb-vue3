/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: 'var(--w-sm)',
      md: 'var(--w-md)',
      lg: 'var(--w-lg)',
      xl: 'var(--w-xl)',
    },
    colors:{
      primary: 'var(--primary)',
      white: 'var(--white)',
      bgBlack: 'var(--bg-black)',
      fGray: 'var(--font-gray)',
    },
    extend: {},
  },
  plugins: [],
}



