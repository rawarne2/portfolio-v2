import React from "react";
import SectionCard from "./SectionCard";
import { IProject } from "../lib/data";

export interface IProjectProps {
  projects: IProject[];
}
// make a button - Demo - to show demos if there is one
export const Projects: React.FC<IProjectProps> = ({ projects }) => {
  return (
    <SectionCard title="Projects" id="projects">
      <div className="flex flex-col justify-center">
        {projects.map((project) => (
          <div key={project.id}>
            <ul className="w-full">
              <li
                key={project.id}
                className="p-4 m-4 dark:bg-gray-400 rounded-md"
              >
                <h3>
                  <strong>{project.title}</strong>
                </h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies: </strong>
                  {project.technologies.join(", ")}
                </p>
                <p>
                  <strong>Github:</strong>{" "}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github}
                  </a>
                </p>
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLICK HERE
                    {/* {project.demo} */}
                  </a>
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
