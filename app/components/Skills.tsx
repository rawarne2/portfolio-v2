import React from "react";
import SectionCard from "./SectionCard";

export default function Skills() {
  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "Angular",
    "Redux",
    "React Native",
    "Next.js",
    "Django",
    "Express",
    "Node.js",
    "Git",
    "SQL",
    "MongoDB",
    "Postgres",
    "REST",
    "GraphQL",
    "AWS",
    "Unit Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Data Structures",
    "Algorithms",
    "Authentication",
    "CI/CD",
    "Docker",
    "Agile",
    "Code Reviews",
  ];
  return (
    <SectionCard title="My Skills" id="skills">
      <ul className="flex flex-wrap justify-center text-lg">
        {skillsData.map((skill, index) => (
          <li key={index} className="p-2 m-1 dark:bg-gray-400 rounded-md">
            {skill}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
// separate into primary and secondary skills or languages and tool (say ordered from strongest to weakest)
