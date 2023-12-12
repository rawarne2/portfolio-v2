import React from "react";

export default function Skills() {
  const skillsData = ["HTML", "CSS", "React", "React Native", "Django"];
  return (
    <section id="skills" className="flex flex-col p-4 w-5/6">
      <h2 className="text-3xl font-bold mb-4">My skills</h2>
      <div>
        <ul className="flex flex-wrap justify-center text-lg">
          {skillsData.map((skill, index) => (
            <li key={index} className="p-2 m-2 dark:bg-gray-400 rounded-md ">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
