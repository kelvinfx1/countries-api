/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
      
    },
    extend: {
       colors: {
        lightModeBg: '#f2f2f2',
        darkModeBg: '#020a32',
        graybg:'hsl(400,47%,27%)',
        darkModeElements: '#010723' 
        
       }
    },
  
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}
// 34,46,55
// 43,55,67