import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bzr.dev",
  integrations: [
    tailwind(),
    sitemap(),
    starlight({
      title: "Bazaar Docs",
      expressiveCode: {
        themes: ["github-dark"],
      },
      customCss: ["./src/styles/starlight.css"],
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        ThemeSelect: "./src/components/starlight/ThemeSelector.astro",
        ThemeProvider: "./src/components/starlight/ThemeProvider.astro",
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
        { label: "API Reference", link: "/api" },
      ],
    }),
    mdx(),
  ],
});
