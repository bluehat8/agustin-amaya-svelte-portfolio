/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#707070',
        },
        customColor: {
          DEFAULT: '#ff6347',
        },
      },
    },
  },
  plugins: [],
}

