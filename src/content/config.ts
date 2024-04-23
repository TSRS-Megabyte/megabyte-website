import { z, defineCollection, reference } from "astro:content";

const accomplishmentsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(), // date in yyyy-mm-dd format - for eg 13th december 2017 is 2017-12-13
    subline: z.string(),
    media: z.array(z.string()),// file paths - urls or strings
  }),
});
const noticesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    postDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});
const sessionCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    conductedBy: z.array(reference("conductors")),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    priority: z.number().optional().default(0),
  }),
});
const resourcesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // img: z.string().optional(),
    // author: z.string(),
    lastUpdated: z.date(),
    description: z.string().optional(),
    colors: z.array(z.string().regex(/^#/)).length(2),
    tags: z.array(z.string()).optional(),
  }),
});
const conductorsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    img: z.string().optional(),
    bio: z.string().optional(),
    tags: z.array(z.string()).optional(),
    links: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});
export const collections = {
  accomplishments: accomplishmentsCollection,
  notices: noticesCollection,
  resources: resourcesCollection,
  sessions: sessionCollection,
  conductors: conductorsCollection,
};
