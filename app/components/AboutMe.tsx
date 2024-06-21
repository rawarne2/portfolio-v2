'use client';

import React from 'react';
import SectionCard from './SectionCard';
import profilePic from '../../public/profile-pic.jpg';
import Image from 'next/image';
import data from '../../public/data.json';
import { SocialIcon } from 'react-social-icons';
import { IoMdDownload } from 'react-icons/io';
export default function AboutMe({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
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
                src={profilePic}
                alt='Rashaun'
                width='300'
                height='300'
                className='h-72 w-72 rounded-3xl object-cover'
              />
              <h3>Cincinnati, Ohio</h3>
            </div>
            <div className='text-center'>
              <h2 className='text-l font-medium'>Connect With Me!</h2>
              <div className='flex flex-wrap justify-center'>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/rashaun-warner/',
                      '_blank'
                    )
                  }
                  className='active hover:bg-blue-700 font-medium rounded m-1 p-2 flex items-center justify-center'
                >
                  {'LinkedIn'}
                  <SocialIcon
                    className='rounded-full ml-2'
                    url='https://www.linkedin.com/in/rashaun-warner/'
                    title='linkedin'
                    style={{ height: 36, width: 36 }}
                  />
                </button>
                <button
                  onClick={() =>
                    window.open('https://github.com/rawarne2', '_blank')
                  }
                  className='active hover:bg-blue-700 font-medium rounded m-1 p-2 flex items-center justify-center'
                >
                  {'GitHub'}
                  <SocialIcon
                    className='rounded-full ml-2'
                    url='https://github.com/rawarne2'
                    title='github'
                    style={{ height: 36, width: 36 }}
                  />
                </button>
                <button
                  onClick={() =>
                    window.open('https://medium.com/@Rashaunwarner', '_blank')
                  }
                  className='active hover:bg-blue-700 font-medium rounded m-1 p-2 flex items-center justify-center'
                >
                  {'Medium'}
                  <SocialIcon
                    className='rounded-full ml-2'
                    url='https://medium.com/@Rashaunwarner'
                    title='medium'
                    style={{ height: 36, width: 36 }}
                  />
                </button>
                <button className='active hover:bg-blue-700 font-medium rounded m-1 p-2'>
                  <a
                    download={'RashaunWarnerResume'}
                    href='/rashaun-warner-resume.pdf'
                    className='ml-2 flex items-center justify-center'
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
