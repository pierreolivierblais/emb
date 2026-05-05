import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://embconception.ca/sitemap.xml",
    host: "https://embconception.ca",
  };
}
