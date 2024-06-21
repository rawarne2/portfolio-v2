
import { StaticImageData } from "next/image";

export interface IProject { // move data to separate files in /public folder
  id: number;
  title: string;
  image: StaticImageData | string;
  description: string;
  technologies: string[];
  github: string[];
  preview?: string;
  link?: string;
}
// TODO: add this portfolio site as a project
export interface IExperienceData {
  cardDetailedText?: string;
  cardSubtitle?: string;
  cardTitle?: string;
  date: string;
  id: number;
  company: string;
  jobTitle: string;
  location: string;
  description: string;
  tools: string[];
}

/*
- consider adding fitness app (describe as full auth using AWS Cognito)
- grace shopper
- meal wheel
*/

export interface IBlogsData {
  id: number,
  title: string,
  image: string,
  overview: string,
  url: string,
}

export interface ISection {
  id: string;
  title: string;
}

export const sections: ISection[] = [
  { id: 'about-me', title: 'About Me' },
  { id: 'skills', title: 'My Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'blogs', title: 'Blogs' },
];