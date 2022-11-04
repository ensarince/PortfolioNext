/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yt-gray': '#242424',
        'circleColor': '#333333',
        'cursorColor' : '#A80B44',
        'darkGray': '#292929',
      },
      top:{
        '30': '30px',
        '50': '50px',
      },
      height: {
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '50': '50px',
        '200': '200px',
        '300': '300px',
        '500': '500px',
        '650': '650px',
      },
      width: {
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '50': '50px',
        '200': '200px',
        '300': '300px',
        '500': '500px',
        '650': '650px',
        '900': '900px',
        '2000': '2000px'
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}