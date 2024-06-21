'use client';

import React, { MutableRefObject } from 'react';
import SectionCard from './SectionCard';
import { IProject } from '../lib/dataInterfaces';
import data from '../../public/data.json';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

export interface IProjectProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}
export const Projects: React.FC<IProjectProps> = ({ sectionRef }) => {
  return (
    <div
      key={'projects'}
      id={'projects'}
      ref={sectionRef}
      className='section pt-6'
    >
      <SectionCard title='Projects'>
        {data?.projectsData.map((project: IProject) => (
          <div
            key={project.id}
            className='flex flex-col md:flex-row m-4 rounded-md p-8 justify-between bg-slate-100 text-black border-b-4 border-black'
          >
            <div className='flex-col md:flex-[3]'>
              <span className='flex flex-row items-center mb-2 justify-between'>
                <h3 className='text-wrap text-xl font-bold'>{project.title}</h3>
                <span className='flex flex-row justify-between items-center'>
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
                        <FaExternalLinkAlt style={{ height: 24, width: 24 }} />
                      </Link>
                    </button>
                  )}
                </span>
              </span>
              <p>{project.description}</p>
              <ul className='flex flex-wrap mt-2'>
                {project?.technologies.map((item, i) => (
                  <li
                    key={i}
                    className='p-2 m-1 active rounded-md border-[0.15rem] max-w-fit'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-4 md:mt-0 md:flex-1 md:ml-4'>
              <Image
                unoptimized={true}
                src={project.image}
                alt='Rashaun'
                className='w-full h-max'
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </SectionCard>
    </div>
  );
};
