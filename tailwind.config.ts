/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.html',
    './node_modules/flowbite/**/*.js',
  ],

  theme: {
    fontFamily: {
      'cairo': ['Cairo', 'sans-serif'], 
    },
    extend: {
      colors: {
        primary_white: "#FEFEFF", 
        secondary_red: "#E30713",
        myblack:"#111619", 
        nav_items: "#4F5665",
        footer: "#E8F8FA",
        hover_menu:"#F5F5F5",
        achievments: "#80CBD2", 
        achievments_hover:"#F97066"
      },
    },
  },
  plugins: [],
}

