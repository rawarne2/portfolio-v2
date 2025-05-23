'use client';

import React from 'react';
import SectionCard from './SectionCard';
import { SocialIcon } from 'react-social-icons';
import data from '../../public/data.json';
import { BlogType } from '../lib/schema';

export const Blogs = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div key={'blogs'} id={'blogs'} ref={sectionRef} className='section pt-6 scroll-mt-16'>
      <SectionCard title='Blogs'>
        <div>
          {data?.blogsData.map((blog: BlogType) => (
            <div
              className='m-4 rounded-md p-8 bg-slate-100 text-black border-b-4 border-black shadow-md shadow-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/60'
              key={blog.id}
            >
              <span className='flex flex-row items-center mb-2 justify-between'>
                <h3 className='text-wrap text-lg font-semibold w-3/4'>
                  <a href={blog.url} target='_blank' className="transition-colors duration-200 hover:text-blue-700">
                    {blog.title}
                  </a>
                </h3>
                <button
                  onClick={() => window.open(blog.url, '_blank')}
                  className='p-2 m-1 active rounded-md flex hover:bg-blue-700 items-center justify-center transition-all duration-200 hover:shadow-md hover:shadow-black/50 hover:scale-105'
                >
                  {'Read Here'}
                  <SocialIcon
                    className='rounded-full border-[0.15rem] border-white ml-2'
                    url={blog.url}
                    title={blog.title}
                    style={{ height: 32, width: 32 }}
                  />
                </button>
              </span>
              <p>{blog.overview}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};
