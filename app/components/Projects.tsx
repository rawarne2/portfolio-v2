import React from "react";

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
    <section id="projects" className="flex flex-col p-4 w-5/6">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 gap-4">
        {projects?.map((project) => (
          <div key={project.id} className="p-4 dark:bg-gray-400 rounded-lg">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <ul className="mb-6 text-sm">
              <li key={project.id}>
                <h3>{project.title}</h3>
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
                    {project.liveDemo}
                  </a>
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
