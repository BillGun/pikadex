import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/api/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        town: "url('/image/pokemon-town.jpg')",
      },
      colors: {
        themeDark: "#24282f",
        themeSoftDark: "#24282f80",
        themeLight: "#D6DBDC",
        themeSoftLight: "#D6DBDC80",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
      boxShadow: {
        custom: "box-shadow 0 5px 10px rgba( #000, .8 )",
      },
    },
  },
  plugins: [],
};
export default config;
