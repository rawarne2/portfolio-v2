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
      className='section pt-6'
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
              }}
              icon={React.createElement(CgWorkAlt)}
              iconStyle={{ background: 'black', color: 'white' }}
            >
              <strong>
                <h2>{job.company}</h2>
              </strong>
              <h4>
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
