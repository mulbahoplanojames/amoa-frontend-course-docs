// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AMOA Frontend Course Docs",
      social: {
        github:
          "https://github.com/mulbahoplanojames/amoa-frontend-course-docs",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
          ],
        },
        {
          label: "HTML Docs",
          autogenerate: { directory: "html" },
        },
        {
          label: "CSS Docs",
          autogenerate: { directory: "css" },
        },
        {
          label: "JavaScript Docs",
          autogenerate: { directory: "javascript" },
        },
        {
          label: "React JS Docs",
          autogenerate: { directory: "reactjs" },
        },
      ],
    }),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
