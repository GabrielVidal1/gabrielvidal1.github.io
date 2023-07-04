import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string().max(100, 'The title length must be less than or equal to 100 chars'),
        description: z.string().optional(),
        tags: z.array(z.string()),
        techs: z.array(z.string()).optional(),
        date: z.string(),
        cover: z.string().optional(),
        project: z.string().optional(),
        links: z.array(z.string()).optional(),
        // category: z.string(),
    })
})

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string().max(100, 'The title length must be less than or equal to 100 chars'),
        description: z.string().optional(),
        tags: z.array(z.string()),
        techs: z.array(z.string()).optional(),
        date: z.string(),
        cover: z.string().optional(),
    })
})


export const collections = {
    'blog': blogCollection,
    'project': projectCollection,
}
