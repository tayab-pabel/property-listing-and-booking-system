const colors = require('tailwindcss/colors')
  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         fontFamily: {
          dm: "'DM Sans', sans-serif",
         },
         colors: {
          blue: {
            light: '#0047ff',
            DEFAULT: '#1b0c75',
            dark: '#1b0c75',
            gray: '#E8E6F1'
          },
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/forms'),
     ],
   }
