import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "Bazaar Docs",
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
        { label: "API Reference", link: "/api" },
      ],
    }),
  ],
  site: "https://bzr.dev",
});
