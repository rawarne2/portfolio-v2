'use client';

import React from 'react';
import SectionCard from './SectionCard';
import Image from 'next/image';
import data from '../../public/data.json';
import { SocialIcon } from 'react-social-icons';
import { IoMdDownload } from 'react-icons/io';
export default function AboutMe({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  // Destructure URLs from data.json
  const { urls } = data;
  
  return (
    <div
      key={'about-me'}
      id={'about-me'}
      className='section flex-col items-center pt-5'
      ref={sectionRef}
    >
      <SectionCard title='About Me'>
        <div className='flex flex-col md:flex-row m-4 rounded-md p-8 justify-between align-middle bg-slate-100 text-black border-b-4 border-black'>
          <div className='flex flex-col justify-between flex-1 items-center'>
            <h2 className='text-xl font-medium text-pretty text-center'>
              Fullstack Developer / Software Engineer
            </h2>
            <div className='text-center my-4'>
              <Image
                unoptimized={true}
                src={
                  'https://picsum.photos/400/400'
                }
                alt='Profile Picture'
                width='300'
                height='300'
                className='h-72 w-72 rounded-3xl object-cover'
              />
              <h3>Chicago, Ohio</h3>
            </div>
            <div className='text-center'>
              <h2 className='text-l font-medium'>Connect With Me!</h2>
              <div className='flex flex-wrap justify-center'>
                {urls.linkedin && (
                  <button
                    onClick={() => window.open(urls.linkedin, '_blank')}
                    className='active hover:bg-blue-700 font-medium rounded m-1 p-2 flex items-center justify-center'
                  >
                    {'LinkedIn'}
                    <SocialIcon
                      className='rounded-full ml-2'
                      url={urls.linkedin}
                      title='linkedin'
                      style={{ height: 36, width: 36 }}
                    />
                  </button>
                )}
                {urls.github && (
                  <button
                    onClick={() => window.open(urls.github, '_blank')}
                    className='active hover:bg-blue-700 font-medium rounded m-1 p-2 flex items-center justify-center'
                  >
                    {'GitHub'}
                    <SocialIcon
                      className='rounded-full ml-2'
                      url={urls.github}
                      title='github'
                      style={{ height: 36, width: 36 }}
                    />
                  </button>
                )}
                {urls.medium && (
                  <button
                    onClick={() => window.open(urls.medium, '_blank')}
                    className='active hover:bg-blue-700 font-medium rounded m-1 p-2 flex items-center justify-center'
                  >
                    {'Medium'}
                    <SocialIcon
                      className='rounded-full ml-2'
                      url={urls.medium}
                      title='medium'
                      style={{ height: 36, width: 36 }}
                    />
                  </button>
                )}
                <button className='active hover:bg-blue-700 font-medium rounded m-1 p-2'>
                  <a
                    download={'Resume.pdf'}
                    href={'/Resume.pdf'}
                    className='ml-2 flex items-center justify-center'
                    target='_blank'
                  >
                    {'Resume'}
                    <IoMdDownload style={{ height: 32, width: 32 }} />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <p>{data?.aboutMeData}</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
