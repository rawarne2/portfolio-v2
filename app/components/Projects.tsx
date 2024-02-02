"use client";

import React from "react";
import SectionCard from "./SectionCard";
import { IProject } from "../lib/data";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export interface IProjectProps {
  projects: IProject[];
}

export const Projects: React.FC<IProjectProps> = ({ projects }) => {
  return (
    <SectionCard title="Projects" id="projects">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row m-2 md:m-6 mt-4 mb-4 border-4 border-white rounded-md p-4 justify-between"
        >
          <div className="flex-col md:flex-[3]">
            <span className="flex flex-row items-center mb-2 justify-between">
              <h3 className="text-wrap text-xl font-bold">{project.title}</h3>
              <span className="flex flex-row justify-between items-center">
                <SocialIcon
                  className="rounded-full border-[0.15rem] border-white"
                  url={project.github}
                  title="github"
                  style={{ height: 35, width: 35 }}
                />
                {project.link && (
                  <Link href={project.link} target="_blank">
                    <FaExternalLinkAlt
                      style={{ height: 25, width: 25, marginLeft: 12 }}
                    />
                  </Link>
                )}
              </span>
            </span>
            <p>{project.description}</p>
            <ul className="flex flex-wrap mt-2">
              {project.technologies.map((item, i) => (
                <li
                  key={i}
                  className="p-1 m-1 dark:bg-gray-500 rounded-md border-[0.15rem] border-white max-w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 md:mt-0 md:flex-1 md:ml-4">
            <Image src={project.image} alt="Rashaun" className="w-full h-max" />
          </div>
        </div>
      ))}
    </SectionCard>
  );
};
