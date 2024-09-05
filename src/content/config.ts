import { z, defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const docsCollection = defineCollection({ schema: docsSchema() });

const featuresCollection = defineCollection({
  type: "content",
  schema: {
    title: z.string(),
    summary: z.string(),
    order: z.number(),
  },
});

export const collections = {
  docs: docsCollection,
  features: featuresCollection,
};
