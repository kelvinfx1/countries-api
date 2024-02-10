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
        lightModeBg: 'hsl(0, 0%, 100%)',
        darkModeBg: 'hsl(207, 26%, 17%)',
        darkModeElements: ' hsl(209, 23%, 22%)' 
        
       }
    },
  
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}
// 34,46,55
// 43,55,67