import React from "react";
import SectionCard from "./SectionCard";

export default function Skills() {
  const skillsData = ["HTML", "CSS", "React", "React Native", "Django"];
  return (
    <SectionCard title="My Skills" id="skills">
      <ul className="flex flex-wrap justify-center text-lg">
        {skillsData.map((skill, index) => (
          <li key={index} className="p-2 m-2 dark:bg-gray-400 rounded-md ">
            {skill}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
