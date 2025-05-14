'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionCard from './SectionCard';
import { ExperienceType } from '../lib/schema';
import data from '../../public/data.json';
import { CgWorkAlt } from 'react-icons/cg';

export default function Experience({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      key={'experience'}
      id={'experience'}
      ref={sectionRef}
      className='section pt-6 scroll-mt-16'
    >
      <SectionCard title='Experience'>
        <VerticalTimeline layout='1-column-left'>
          {data?.experienceData.map((job: ExperienceType, index: number) => (
            <VerticalTimelineElement
              visible={true}
              date={job.date}
              dateClassName='text-auto'
              key={index}
              contentStyle={{
                color: 'black',
                background: 'rgb(241 245 249)',
                borderRadius: '10px',
                padding: '2rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s ease',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgb(241 245 249)',
                transition: 'all 0.3s ease',
              }}
              icon={React.createElement(CgWorkAlt)}
              iconStyle={{ background: 'black', color: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)' }}
            >
              <h3 className='text-lg font-semibold'>{job.company}</h3>
              <h4 className='text-lg font-medium'>
                {job.jobTitle} - {job.location}
              </h4>
              <p className='text-left mt-2'>{job.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </SectionCard>
    </div>
  );
}
