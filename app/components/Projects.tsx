import React from "react";
import SectionCard from "./SectionCard";

export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
}

export interface ProjectProps {
  projects?: IProject[];
}

export const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <SectionCard title="Projects" id="projects">
      <div className="flex flex-col justify-center">
        {projects?.map((project) => (
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
                <p>Technologies: {project.technologies.join(", ")}</p>
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
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLICK HERE
                    {/* {project.liveDemo} */}
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
