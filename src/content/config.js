import { z, defineCollection } from "astro:content";

const accomplishmentsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(), // date in yyyy-mm-dd format - for eg 13th december 2017 is 2017-12-13
    subline: z.string(),
    media: z.array(z.string()), // file paths - urls or strings
  }),
});
const noticesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    postDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});
const sessionCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    priority: z.number().optional().default(0),
  }),
});
const resourcesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string().optional(),
    author: z.string(),
    postDate: z.date(),
    description: z.string(),
    colors: z.array(z.string().regex(/^#/)).length(2),
    tags: z.array(z.string()).optional(),
  }),
});
export const collections = {
  accomplishments: accomplishmentsCollection,
  notices: noticesCollection,
  resources: resourcesCollection,
  sessions: sessionCollection,
};
