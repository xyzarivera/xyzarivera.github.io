/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D30CB8",
          secondary: "#5DA4A6",
          accent: "#6DF1D8",
          neutral: "#D30CB8",
          "base-100": "#282A36",
          info: "#53C0F3",
          success: "#71EAD2",
          warning: "#F3CC30",
          error: "#E24056",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
