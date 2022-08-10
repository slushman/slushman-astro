/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

// Settings
const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      mono: ["ui-monospace", '"Source Code Pro"', "monospace"],
      sans: ["ui-sans-serif", '"Source Sans Pro"', "sans-serif"],
      merri: ["ui-serif", "Merriweather", "serif"],
    },
    fontSize: settingsFontSizes,
    maxWidth: {
      ...defaultTheme.maxWidth,
      prose: "68ch",
      screen: "100vw",
    },
    screens: settingsScreens,
    extend: {
      colors: {
        lightblue: "#90C8E8",
        medblue: "#03649C",
        brightblue: "#41b7fb",
        darkblue: "#023451",
        offwhite: "#EEF8FF",
        linkblue: "#0374b5",
        lightgray: "#BEC8CF",
        medgray: "#606569",
      },
      flex: {
        "flex-half": "50%",
      },
      gridTemplateColumns: {
        "shurls-sm": "repeat(auto-fit, minmax(25%, 1fr))",
        "shurls-lg": "repeat(auto-fit, minmax(64px, 1fr))",
        "post-list": "repeat(auto-fit, minmax(40ch, 1fr))",
        "two-across": "auto auto",
        "three-across": "auto auto auto",
        "four-across": "auto auto auto auto",
        "five-across": "auto auto auto auto auto",
      },
    },
  },
};
