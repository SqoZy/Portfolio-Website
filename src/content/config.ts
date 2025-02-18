import { defineCollection, z } from "astro:content";
import { date } from "astro:schema";

const postCollection = defineCollection({
    schema: ({ image }) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    })
});

const gameCollection = defineCollection({
    schema: ({ image }) => z.object({
        categories: z.array(z.string()),
        date: z.string(),
        featured: z.boolean(),
        image: image(),
        title: z.string(),
    })
});

export const collections = {
    post: postCollection,
    game: gameCollection,
};
