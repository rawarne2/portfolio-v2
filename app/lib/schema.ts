import { z } from 'zod';
import { StaticImageData } from 'next/image';

const nonEmptyString = z.string().min(2, "String must be at least 2 characters");
const urlString = z.string().url("Must be a valid URL").max(200, "URL must not exceed 200 characters");

export const ProjectSchema = z.object({
    id: z.number(),
    title: z.string().max(50, "Title must not exceed 50 characters"),
    images: z.array(z.string().max(200, "Image URL must not exceed 200 characters")),
    description: z.string().max(2000, "Description must not exceed 2000 characters"),
    technologies: z.array(z.string().max(50, "Technology must not exceed 50 characters")),
    github: z.array(urlString),
    preview: z.string().max(200, "Preview must not exceed 200 characters").optional(),
    link: urlString.optional(),
});

export const ExperienceSchema = z.object({
    cardDetailedText: z.string().max(2000, "Card detailed text must not exceed 2000 characters").optional(),
    cardSubtitle: z.string().max(100, "Card subtitle must not exceed 100 characters").optional(),
    cardTitle: z.string().max(100, "Card title must not exceed 100 characters").optional(),
    date: nonEmptyString,
    id: z.number(),
    company: nonEmptyString,
    jobTitle: nonEmptyString,
    location: nonEmptyString,
    description: nonEmptyString,
    tools: z.array(nonEmptyString),
});

export const BlogSchema = z.object({
    id: z.number(),
    title: nonEmptyString,
    image: nonEmptyString,
    overview: nonEmptyString,
    url: urlString,
});

export const UrlsSchema = z.object({
    github: urlString,
    linkedin: urlString,
    medium: urlString.optional(),
    profilePic: urlString.optional(),
    resume: urlString.optional(),
});

export const SkillsSchema = z.object({
    "Frontend Development": z.array(nonEmptyString),
    "Backend Development": z.array(nonEmptyString),
    "DevOps & Testing": z.array(nonEmptyString),
    "Core Skills": z.array(nonEmptyString),
});

export const DataSchema = z.object({
    name: nonEmptyString,
    urls: UrlsSchema,
    aboutMeData: z.array(nonEmptyString),
    experienceData: z.array(ExperienceSchema),
    projectsData: z.array(ProjectSchema),
    blogsData: z.array(BlogSchema),
    skillsData: SkillsSchema,
});

export const SectionSchema = z.object({
    id: z.string().min(1, "ID must not be empty").max(50, "ID must not exceed 50 characters"),
    title: z.string().min(1, "Title must not be empty").max(50, "Title must not exceed 50 characters"),
});

// Derive TypeScript types from Zod schemas
export type ProjectType = z.infer<typeof ProjectSchema>;
export type ExperienceType = z.infer<typeof ExperienceSchema>;
export type BlogType = z.infer<typeof BlogSchema>;
export type SectionType = z.infer<typeof SectionSchema>;
export type SkillsType = z.infer<typeof SkillsSchema>;
export type UrlsType = z.infer<typeof UrlsSchema>;
export type DataType = z.infer<typeof DataSchema>;

// Re-export the sections array
export const sections: SectionType[] = [
    { id: 'about-me', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'blogs', title: 'Blogs' },
    { id: 'skills', title: 'My Skills' },
]; 