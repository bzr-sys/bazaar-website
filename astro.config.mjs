import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bzr.dev",
  integrations: [
    astroExpressiveCode({
      themes: ["github-dark"],
    }),
    tailwind(),
    sitemap(),
    starlight({
      title: "Bazaar Docs",
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
