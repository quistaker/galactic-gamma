// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const sttmCollection = defineCollection({
    type: 'content',
    schema: z.object({
      person: z.string(),
      aboutPerson: z.string(),
      aboutCase: z.string(),
      timeToRead: z.number(),
      quote: z.string(),

      statementDate: z.string(),
      court: z.string(),
      sourceLink: z.string(),
      caseLink: z.string(),
      photoDesc: z.string(),

      image: z.string(),
      country: z.string(),
      years: z.string(),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  statements: sttmCollection,
};