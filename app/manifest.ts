
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "LEXICON. — For the verbally insufferable",
    short_name: "LEXICON.",
    description: "A little pretension never hurt.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5EF",
    theme_color: "#F8F5EF",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
