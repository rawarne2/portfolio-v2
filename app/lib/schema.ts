import { z } from 'zod';
import { StaticImageData } from 'next/image';

// No validation necessary for these schemas as they're just type definitions
export const ProjectSchema = z.object({
    id: z.number(),
    title: z.string(),
    image: z.union([z.custom<StaticImageData>(), z.string()]),
    description: z.string(),
    technologies: z.array(z.string()),
    github: z.array(z.string()),
    preview: z.string().optional(),
    link: z.string().optional(),
});

export const ExperienceSchema = z.object({
    cardDetailedText: z.string().optional(),
    cardSubtitle: z.string().optional(),
    cardTitle: z.string().optional(),
    date: z.string(),
    id: z.number(),
    company: z.string(),
    jobTitle: z.string(),
    location: z.string(),
    description: z.string(),
    tools: z.array(z.string()),
});

export const BlogSchema = z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    overview: z.string(),
    url: z.string(),
});

export const SectionSchema = z.object({
    id: z.string(),
    title: z.string(),
});

// Derive TypeScript types from Zod schemas
export type Project = z.infer<typeof ProjectSchema>;
export type ExperienceData = z.infer<typeof ExperienceSchema>;
export type BlogsData = z.infer<typeof BlogSchema>;
export type Section = z.infer<typeof SectionSchema>;

// Re-export the sections array
export const sections: Section[] = [
    { id: 'about-me', title: 'About Me' },
    { id: 'skills', title: 'My Skills' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'blogs', title: 'Blogs' },
]; 