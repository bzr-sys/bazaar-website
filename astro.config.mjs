import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "RethinkID Docs",
      customCss: ["./src/styles/starlight.css"],
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        ThemeSelect: "./src/components/starlight/ThemeSelector.astro",
      },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: {
            directory: "docs/start-here",
          },
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "docs/guides",
          },
        },
        {
          label: "Features",
          autogenerate: {
            directory: "docs/features",
          },
        },
        {
          label: "Tutorials",
          items: [
            { label: "Create a Vue.js Battleship App", link: "/blog/post-1" },
          ],
        },
      ],
    }),
  ],
  site: "https://rethinkid-website.netlify.app",
});
