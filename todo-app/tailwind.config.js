/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
      },
      colors: {
        primary: "#F1FDFF", // tealish - light
        secondary: "#CACCFF", // purple - light
        accent: "#a29bfe", // purple bright - main accent
        neutral: "#6A679B", // purple grey - neutral
        bgPrimary: "#141516", // grey - dark
        bgSecondary: "#383752", // purple grey - darker
      },
      screens: {
        mobile: "360px", // => @media (min-width: 360px) { ... }
        tablet: "640px", // => @media (min-width: 640px) { ... }
        laptop: "1024px", // => @media (min-width: 1024px) { ... }
        desktop: "1280px", // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        molaTheme: {
          primary: "#F1FDFF",
          secondary: "#CACCFF",
          accent: "#a29bfe",
          neutral: "#6A679B",
          "base-100": "#f3eee1",
          info: "#90C8ED",
          success: "#5DD7A6",
          warning: "#F7EC87",
          error: "#FF8F8F",
        },
      },
    ],
  },
};
