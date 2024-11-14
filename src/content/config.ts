import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const postCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string(),
    })
})

export const collections = {
    post: postCollection,
}
