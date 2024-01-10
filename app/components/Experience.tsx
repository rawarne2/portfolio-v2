import React from "react";
import SectionCard from "./SectionCard";

export default function Experience() {
  const experienceData = [
    {
      id: 1,
      jobTitle: "job title 1",
      location: "Cincinnati",
      description: "Description of Project 1",
      date: "12/23/1993 - 12/12/2024",
      technologies: ["React Native", "Node.js", "Express", "Postgres"],
    },
    {
      id: 2,
      jobTitle: "job title 2",
      location: "Cincinnati",
      description: "Description of Project 1",
      date: "12/23/1993 - 12/12/2024",
      technologies: ["React Native", "Node.js", "Express", "Postgres"],
    },
    {
      id: 3,
      jobTitle: "job title 3",
      location: "Cincinnati",
      description: "Description of Project 1",
      date: "12/23/1993 - 12/12/2024",
      technologies: ["React Native", "Node.js", "Express", "Postgres"],
    },
  ];
  return (
    <SectionCard title="Experience" id="experience">
      <div className="flex flex-col justify-center">
        <ul className="w-full">
          {experienceData.map((job, index) => (
            <li key={index} className="p-4 m-4 dark:bg-gray-400 rounded-md">
              <h3 className="mb-2">
                <strong>{job.jobTitle}</strong>
              </h3>
              <p>{job.location}</p>
              <p>{job.description}</p>
              <p>{job.date}</p>
              <p>{job.technologies}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}
