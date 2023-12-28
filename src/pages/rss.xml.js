import rss, { pagesGlobToRssItems } from "@astrojs/rss";
const serviceName = import.meta.env.PUBLIC_SERVICE_NAME;

export async function GET(context) {
  return rss({
    title: `${serviceName} | Blog`,
    description: "Tutorials and news.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
