'use client';

import React from 'react';
import SectionCard from './SectionCard';
import data from '../../public/data.json';

export default function Skills({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div key={'skills'} id={'skills'} ref={sectionRef} className='section pt-6'>
      <SectionCard title='My Skills'>
        <div className='m-4 rounded-md p-8 justify-between align-middle bg-slate-100 text-black border-b-4 border-black'>
          <ul className='flex flex-wrap justify-center text-lg'>
            {data?.skillsData.map((skill, index) => (
              <li key={skill} className='p-2 m-1 active rounded-md'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </SectionCard>
    </div>
  );
}
// separate into primary and secondary skills or languages and tool (say ordered from strongest to weakest)
