'use client';

import React, { MutableRefObject } from 'react';
import SectionCard from './SectionCard';
import { ProjectType } from '../lib/schema';
import { validatedData } from '../lib/data'; // Import validated data
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

export interface ProjectProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}
export const Projects: React.FC<ProjectProps> = ({ sectionRef }) => {
  // Use validated projects data
  const projects = validatedData.projectsData;

  return (
    <div
      key={'projects'}
      id={'projects'}
      ref={sectionRef}
      className='section pt-6'
    >
      <SectionCard title='Projects'>
        {projects.map((project: ProjectType) => (
          <div
            key={project.id}
            className='flex flex-col md:flex-row m-4 rounded-md p-8 justify-between bg-slate-100 text-black border-b-4 border-black'
          >
            <div className='flex-col md:flex-[2.5]'>
              <span className='flex flex-row items-center mb-2 justify-between'>
                <h3 className='text-wrap text-xl font-bold'>{project.title}</h3>
              </span>
              <p>{project.description}</p>
              <ul className='flex flex-wrap mt-2'>
                {project?.technologies.map((item, i) => (
                  <li
                    key={i}
                    className='px-2 py-1 m-1 active rounded-md border-b-2 border-black max-w-fit'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {project.image && (
              <div className='mt-4 md:mt-0 md:flex-1 md:ml-4 flex flex-col'>
                <Image
                  unoptimized={true}
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full rounded-md object-cover mb-4'
                  width={500}
                  height={500}
                />
                <span className='flex flex-row items-center justify-center'>
                  {project.github.map((item, i) => (
                    <button
                      className='p-2 m-1 active rounded-md flex items-center justify-center hover:bg-blue-700'
                      key={item}
                      onClick={() => window.open(item, '_blank')}
                    >
                      {'Github'}
                      <SocialIcon
                        className='rounded-full ml-2'
                        url={item}
                        title='github'
                        style={{ height: 32, width: 32 }}
                        bgColor='black'
                      />
                    </button>
                  ))}
                  {project.link && (
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className='p-3 m-1 active rounded-md flex hover:bg-blue-700 items-center justify-center'
                    >
                      {'View'}
                      <Link
                        href={project.link}
                        target='_blank'
                        as={project.link}
                        className='ml-2'
                      >
                        <FaExternalLinkAlt style={{ height: 20, width: 20 }} />
                      </Link>
                    </button>
                  )}
                </span>
              </div>
            )}
          </div>
        ))}
      </SectionCard>
    </div>
  );
};
