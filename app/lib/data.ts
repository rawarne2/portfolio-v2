import rawData from '../../public/data.json';
import { DataSchema, DataType } from './schema';

// Default data to use when validation fails
const defaultData = {
    name: "Firstname Lastname",
    urls: {
        portfolio: "https://example.com",
        github: "https://github.com/example",
        linkedin: "https://linkedin.com/in/example",
        medium: "https://medium.com/@example"
    },
    aboutMeData: ["Portfolio information not available at the moment."],
    experienceData: [],
    projectsData: [],
    blogsData: [],
    skillsData: {
        "Frontend Development": [],
        "Backend Development": [],
        "DevOps & Testing": [],
        "Core Skills": []
    }
};

const parsedData = DataSchema.safeParse(rawData);
let validatedData: DataType;

if (!parsedData.success) {
    console.error("Invalid data format:", parsedData.error.format());
    // Log the error but don't throw, use default data instead
    validatedData = defaultData;
} else {
    validatedData = parsedData.data;
}

export { validatedData };
