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
  const { urls } = data;

  return (
    <div
      key={'about-me'}
      id={'about-me'}
      className='section scroll-mt-28'
      ref={sectionRef}
    >
      <SectionCard title='About Me'>
        <div className='md:grid md:grid-cols-5 bg-slate-100 text-black rounded-lg shadow-lg shadow-black/50 border-b-4 border-black overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60'>
          <div className='md:col-span-2 flex flex-col items-center justify-around p-8'>
            <div className='flex flex-col items-center'>
              <Image
                unoptimized={true}
                src={urls.profilePic}
                alt='Profile Picture'
                width={288}
                height={288}
                className='h-72 w-72 rounded-2xl object-cover border-b-4 border-black shadow-md shadow-black/50 transition-transform duration-300 hover:scale-[1.02]'
              />
              <h3 className='text-lg font-semibold text-center'>Full Stack Developer / Software Engineer</h3>
              <h5 className='font-medium text-center'>Cincinnati, Ohio / Remote</h5>
            </div>
            <h3 className='text-lg mt-2 md:mt-4 text-center'>Connect With Me!</h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {urls.linkedin && (
                <button
                  onClick={() => window.open(urls.linkedin, '_blank')}
                  className='active hover:bg-blue-700 font-medium rounded p-2 flex items-center justify-center bg-white border border-gray-300 shadow-sm shadow-black/30 transition-all duration-200 hover:shadow-md hover:shadow-black/50 hover:scale-105'
                >
                  {'LinkedIn'}
                  <SocialIcon
                    className='rounded-full ml-2'
                    url={urls.linkedin}
                    title='linkedin'
                    style={{ height: 32, width: 32 }}
                  />
                </button>
              )}
              {urls.github && (
                <button
                  onClick={() => window.open(urls.github, '_blank')}
                  className='active hover:bg-blue-700 font-medium rounded p-2 flex items-center justify-center bg-white border border-gray-300 shadow-sm shadow-black/30 transition-all duration-200 hover:shadow-md hover:shadow-black/50 hover:scale-105'
                >
                  {'GitHub'}
                  <SocialIcon
                    className='rounded-full ml-2'
                    url={urls.github}
                    title='github'
                    style={{ height: 32, width: 32 }}
                  />
                </button>
              )}
              {urls.medium && (
                <button
                  onClick={() => window.open(urls.medium, '_blank')}
                  className='active hover:bg-blue-700 font-medium rounded p-2 flex items-center justify-center bg-white border border-gray-300 shadow-sm shadow-black/30 transition-all duration-200 hover:shadow-md hover:shadow-black/50 hover:scale-105'
                >
                  {'Medium'}
                  <SocialIcon
                    className='rounded-full ml-2'
                    url={urls.medium}
                    title='medium'
                    style={{ height: 32, width: 32 }}
                  />
                </button>
              )}
              <button className='active hover:bg-blue-700 font-medium rounded p-2 flex items-center justify-center bg-white border border-gray-300 shadow-sm shadow-black/30 transition-all duration-200 hover:shadow-md hover:shadow-black/50 hover:scale-105'>
                <a
                  download={'RashaunWarnerResume.pdf'}
                  href={urls.resume}
                  className='ml-2 flex items-center justify-center'
                  target='_blank'
                >
                  {'Resume'}
                  <IoMdDownload style={{ height: 28, width: 28 }} />
                </a>
              </button>
            </div>
          </div>
          {/* About Me Text */}
          <div className='md:col-span-3 text-base whitespace-pre-line indent-4 md:indent-8 p-8 md:pl-0'>
            {data?.aboutMeData.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>
      </SectionCard >
    </div >
  );
}
