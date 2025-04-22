'use client';

import React, { useState } from 'react';
import SectionCard from './SectionCard';
import { validatedData } from '../lib/data';

// Use validated skills data
const SKILL_CATEGORIES = validatedData.skillsData;

export default function Skills({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');

  return (
    <div key={'skills'} id={'skills'} ref={sectionRef} className='section pt-6'>
      <SectionCard title='My Skills'>
        <div className='m-4 rounded-md p-8 bg-slate-100 text-black border-b-4 border-black'>
          {/* Category Tabs */}
          <div className='flex flex-wrap justify-center gap-2 mb-6'>
            {Object.keys(SKILL_CATEGORIES).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES].map(
              (skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className='p-2 m-1 active rounded-md bg-blue-600 text-white text-center flex items-center justify-center min-h-[2.5rem]'
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
