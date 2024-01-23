/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        lightModeBg: 'hsl(0, 0%, 100%)',
        darkModeBg: 'hsl(207, 26%, 17%)',
        darkModeElements: ' hsl(209, 23%, 22%)' 
        
       }
    },
  
  },
  plugins: [require("daisyui")],
}
// 34,46,55
// 43,55,67