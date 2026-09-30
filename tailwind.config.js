/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f7',
          100: '#d9f2ec',
          200: '#b4e5db',
          300: '#83d1c4',
          400: '#4db8a8',
          500: '#1d937d', // Notre couleur principale
          600: '#17755f',
          700: '#155c4c',
          800: '#14483c',
          900: '#133b32',
        },
        secondary: {
          50: '#f5f7f7',
          100: '#e0e7e5',
          200: '#c2d1cd',
          300: '#9db3ae',
          400: '#708c86',
          500: '#1d937d',
          600: '#3b5854',
          700: '#324a46',
          800: '#2a3d3a',
          900: '#243331',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdb874',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      }
    },
  },
  plugins: [],
};