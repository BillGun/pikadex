import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pikadex",
    short_name: "Pikadex",
    description: "Your one stop Pokémon information!",
    start_url: "/",
    display: "standalone",
    background_color: "#D6DBDC",
    theme_color: "#D6DBDC",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
