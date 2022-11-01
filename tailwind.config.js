/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "Helvetica Neue", "sans - serif"],
    },
    extend: {
      colors: {
        ver1: "#404F5E",
        yellowtheme:'#f9c041'
      },
      spacing: {
        w1: '400px',
        b1: '700px',
        uploadw:'1000px',
        profile:'200px'
      }
    },
    minWidth: {
      1: "300px",
    },
    maxHeight: {
      1: "600px",
    },
    boxShadow: {
      sha1: "0 2px 3px #C8D0D8",
      profileshadow:"  3.4px 3.4px 11.9px -14px rgba(0, 0, 0, 0.024),  8.7px 8.7px 20.9px -14px rgba(0, 0, 0, 0.06),  17.7px 17.7px 29.4px -14px rgba(0, 0, 0, 0.107),  36.5px 36.5px 41.8px -14px rgba(0, 0, 0, 0.14),  100px 100px 80px -14px rgba(0, 0, 0, 0.16)"
    },
  },
  plugins: [],
};
