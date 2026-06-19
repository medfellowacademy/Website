import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/courses",
          "/courses/",
          "/courses?page=",
          "*.css",
          "*.js",
          "*.jpg",
          "*.jpeg",
          "*.png",
          "*.webp",
        ],
        disallow: [
          "/*?mode=",
          "/*?ref=",
          "/*?utm_",
          "/admin/",
          "/login/",
          "/checkout/",
          "/cart/",
        ],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
    ],
    sitemap: "https://www.medfellowacademy.com/sitemap.xml",
  };
}