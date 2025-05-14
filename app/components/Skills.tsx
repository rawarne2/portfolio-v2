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
    <div key={'skills'} id={'skills'} ref={sectionRef} className='section pt-6 scroll-mt-20'>
      <SectionCard title='My Skills'>
        <div className='rounded-md p-8 bg-slate-100 text-black border-b-4 border-black shadow-md shadow-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/60'>
          {/* Category Tabs */}
          <div className='flex flex-wrap justify-center gap-2 mb-6'>
            {Object.keys(SKILL_CATEGORIES).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-all duration-200 shadow-sm shadow-black/30 hover:shadow-md hover:shadow-black/50 ${activeCategory === category
                  ? 'primary-blue-bg transform hover:scale-105'
                  : 'bg-white text-[rgb(var(--primary-blue))] hover:bg-blue-50 border border-[rgb(var(--primary-blue))] hover:scale-105'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className='mb-4'>
            <h4 className='font-semibold uppercase tracking-wider mb-2 text-gray-600'>{activeCategory}</h4>
            <ul className='flex flex-wrap gap-1'>
              {SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES].map(
                (skill, index) => (
                  <li
                    key={`${skill}-${index}`}
                    className='px-2 py-1 primary-blue-bg rounded-md transition-all duration-200 hover:bg-blue-700 hover:shadow-sm hover:shadow-black/40'
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
