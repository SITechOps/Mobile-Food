/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "red-light": "#fdedee",
        "red-normal": "#ee4c58",
        "gray-light": "#f1f1f1",
        "gray-medium": "#a9a9a9",
        "gray-dark": "#808080",
      },
      fontFamily: {
        body: "Dosis_400Regular",
        medium: "Dosis_500Medium",
        heading: "Dosis_600SemiBold",
        highlight: "Dosis_700Bold",
      },
    },
  },
  plugins: [],
};
