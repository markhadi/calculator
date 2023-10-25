/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark-main": "hsl(222, 26%, 31%)",
        "blue-dark-toggle": "hsl(223, 31%, 20%)",
        "blue-dark-screen": "hsl(224, 36%, 15%)",
        "blue-desaturated-keybg": "hsl(225, 21%, 49%)",
        "red-keybg": "hsl(6, 63%, 50%)",
        "orange-light-keybg": "hsl(30, 25%, 89%)",
        "red-hov": "hsl(6, 93%, 67%)",
        "blue-hov": "hsl(224, 51%, 76%)",
        "grayish-blue-dark": "hsl(221, 14%, 31%)",
      },
      boxShadow: {
        "blue-desaturated": "0 4px 0 0 hsl(224, 28%, 35%)",
        "red-dark": "0 4px 0 0 hsl(6, 70%, 34%)",
        "orange-grayish": "0 4px 0 0 hsl(28, 16%, 65%)",
      },
    },
  },
  plugins: [],
};
