'use client';

import React, { useState } from 'react';
import SectionCard from './SectionCard';
import data from '../../public/data.json';

// Categories and their skills
const SKILL_CATEGORIES = {
  'Frontend Development': [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'Angular',
    'Redux',
    'Tailwind CSS',
    'Bootstrap',
    'Material UI',
    'Ant Design',
    'SASS',
    'LESS',
    'Accessibility',
    'SEO',
    'Performance Optimization',
  ],
  'Backend Development': [
    'Python',
    'Java',
    'Django',
    'Express.js',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'SQL',
    'NoSQL',
    'RESTful APIs',
    'GraphQL',
    'Authentication',
    'Authorization',
    'OAuth',
    'JWT',
    'RabbitMQ',
    'Microservices',
    'Serverless (AWS Lambda)',
  ],
  'DevOps & Testing': [
    'AWS',
    'Unit Testing',
    'Integration Testing',
    'End-to-End Testing',
    'Jest',
    'Cypress',
    'React Testing Library',
    'React Native Testing Library',
    'pytest',
    'pytest-django',
    'CI/CD',
    'Docker',
  ],
  'Core Skills': [
    'Data Structures',
    'Algorithms',
    'Authentication',
    'Agile',
    'Git',
    'Code Reviews',
    'Problem Solving',
    'Debugging',
    'Clean code',
    'Adaptability',
    'SOLID/DRY',
  ],
};

export default function Skills({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');

  // Verify all skills from data.json are included in categories
  const allCategorizedSkills = Object.values(SKILL_CATEGORIES).flat();
  const missingSkills = data.skillsData.filter(
    (skill) => !allCategorizedSkills.includes(skill)
  );
  if (missingSkills.length > 0) {
    console.warn('Missing skills in categories:', missingSkills);
  }

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
