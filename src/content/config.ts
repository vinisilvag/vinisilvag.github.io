import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		author: z.string(),
		date: z.string(),
		image: z.string(),
		title: z.string(),
	}),
});

export const collections = {
	posts: postsCollection,
};
