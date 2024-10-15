/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // custom colors
        primary: "#004324",
        pry1: "#fff",
        pry2: "#F5F5F5",
        pry3: '#333',
        myCustomColor: {
          light: "#8ED06C",
          lighterGreen: "#EAF4E2",
          secondary: "#6E6E6E",
        },
      },
      padding: {
        4.1: "4.125rem",
      },
      borderRadius: {
        "semi-round": "2rem",
        "very-round": "4rem",
      },
      fontFamily: {
        Roboto: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "big-font": "5rem",
        "small-font": "3rem",
      },
       
      lineHeight: {
        lineSm: "48px",
        lineBg: "90px",
      },
      letterSpacing: {
        spacing: "-0.25rem",
      },
    },
    plugins: [],
  },
};
