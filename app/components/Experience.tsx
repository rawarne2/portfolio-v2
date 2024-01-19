import React from "react";
import SectionCard from "./SectionCard";
import { experienceData } from "../lib/data";

export default function Experience() {
  return (
    <SectionCard title="Experience" id="experience">
      <div className="flex flex-col justify-center">
        <ul className="w-full">
          {experienceData.reverse().map((job, index) => (
            <li key={index} className="p-4 m-4 dark:bg-gray-400 rounded-md">
              <h3 className="mb-2">
                <strong>{job.jobTitle}</strong>
              </h3>
              <p>{job.location}</p>
              <p>{job.date}</p>
              <p>{job.description}</p>
              <p>{job.tools.toString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}
