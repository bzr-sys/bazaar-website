import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: `Bazaar | Blog`,
    description: "Tutorials and news.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
