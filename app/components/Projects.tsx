'use client';
import React from 'react';
import SectionCard from './SectionCard';
import { ProjectType } from '../lib/schema';
import { validatedData } from '../lib/data';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface ProjectProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}
export const Projects: React.FC<ProjectProps> = ({ sectionRef }) => {
  // Use validated projects data
  const projects = validatedData.projectsData;

  // First 5 projects are featured, rest are other projects

  return (
    <div
      key={'projects'}
      id={'projects'}
      className='section pt-6 scroll-mt-16'
      ref={sectionRef}
    >
      <SectionCard title='Projects'>
        {/* Featured Projects */}
        {projects.slice(0, 5).map((project: ProjectType) => (
          <div
            key={project.id}
            className='bg-slate-100 text-black rounded-lg shadow-md shadow-black/50 border-b-4 border-black p-8 mb-4 md:mb-8 transition-all duration-300 hover:shadow-lg hover:shadow-black/60'
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <h3 className='text-lg font-semibold'>{project.title}</h3>
                <div className='flex gap-2'>
                  <div className='flex flex-col sm:flex-row gap-2'>
                    {project.github.map((item, i) => (
                      <button
                        className='px-3 py-1 bg-gray-800 text-white rounded-md flex items-center hover:bg-gray-700 transition-all duration-200 hover:shadow-md hover:shadow-black/60'
                        key={item}
                        onClick={() => window.open(item, '_blank')}
                      >
                        Github
                        <SocialIcon
                          url={item}
                          style={{ height: 20, width: 20, marginLeft: 4 }}
                          bgColor='white'
                          fgColor='black'
                        />
                      </button>
                    ))}
                  </div>
                  {project.link && (
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className='px-3 py-1 h-full bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition-all duration-200 hover:shadow-md hover:shadow-black/60'
                    >
                      View
                      <FaExternalLinkAlt style={{ marginLeft: 6, height: 12, width: 12 }} />
                    </button>
                  )}
                </div>
              </div>
              <p className='text-gray-700 mb-4'>{project.description}</p>

              {project.images.length > 0 && (
                <div className='w-full items-center flex flex-col sm:flex-row justify-around py-4'>
                  {project.images.slice(0, 3).map((img, index) => (
                    <div
                      key={index}
                      className='relative aspect-[4/5] min-h-20 h-80 rounded-md max-w-56 overflow-hidden mx-8 sm:mx-0 mb-6 md:mb-0 shadow-md shadow-black/50 transition-transform duration-300 hover:scale-[1.02]'
                    >
                      <Image
                        unoptimized={true}
                        src={img}
                        alt={`${project.title} image ${index + 1}`}
                        // className='object-cover'
                        fill
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600">Technologies</h4>
                <ul className='flex flex-wrap gap-1'>
                  {project.technologies.map((item, i) => (
                    <li
                      key={i}
                      className='px-2 py-1 bg-[rgb(53,78,142)] text-white rounded-md text-sm transition-all duration-200 hover:bg-[rgb(63,88,152)] hover:shadow-sm hover:shadow-black/40'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(5).map((project: ProjectType) => (
              <div
                key={project.id}
                className='bg-slate-100 text-black rounded-xl shadow-xl shadow-black/50 border-b-4 border-black h-full transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 hover:translate-y-[-2px]'
              >
                {project.images.length > 0 && (
                  <div className="relative h-48 w-full">
                    <Image
                      unoptimized={true}
                      src={project.images[0]}
                      alt={project.title}
                      className='object-cover rounded-t-lg'
                      fill
                    />
                  </div>
                )}

                <div className="p-5 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className='text-lg font-semibold'>{project.title}</h4>
                    <div className='flex gap-2'>
                      {project.github.map((item, i) => (
                        <button
                          className='px-2 py-1 bg-gray-800 text-white rounded-md flex items-center text-xs hover:bg-gray-700 transition-all duration-200 hover:shadow-md hover:shadow-black/60'
                          key={item}
                          onClick={() => window.open(item, '_blank')}
                        >
                          <SocialIcon
                            url={item}
                            style={{ height: 16, width: 16 }}
                            bgColor='white'
                            fgColor='black'
                          />
                        </button>
                      ))}
                      {project.link && (
                        <button
                          onClick={() => window.open(project.link, '_blank')}
                          className='px-2 py-1 bg-blue-600 text-white rounded-md flex items-center text-xs hover:bg-blue-700 transition-all duration-200 hover:shadow-md hover:shadow-black/60'
                        >
                          <FaExternalLinkAlt style={{ height: 10, width: 10 }} />
                        </button>
                      )}
                    </div>
                  </div>
                  <p className='text-gray-700 mb-4'>{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600">Technologies</h4>
                    <ul className='flex flex-wrap gap-1'>
                      {project.technologies.map((item, i) => (
                        <li
                          key={i}
                          className='px-2 py-1 bg-[rgb(53,78,142)] text-white rounded-md text-sm transition-all duration-200 hover:bg-[rgb(63,88,152)] hover:shadow-sm hover:shadow-black/40'
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </SectionCard>
    </div>
  );
};

/*
projects: 
Featured: 
  - Top 5 Dating Apps
  - Preferences Game
  - Dynasty Dashboard
  - NutriYum
  - Memory Game
-Other Projects
  - LCA Properties
  - NBA Stats Search
*/