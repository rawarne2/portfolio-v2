'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import rawData from '../../public/data.json';

export default function Footer() {
  // Get URLs from data.json
  const { urls } = rawData;
  
  return (
    <footer className='flex items-center flex-wrap p-4'>
      {urls.linkedin && (
        <SocialIcon
          className='mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white'
          url={urls.linkedin}
          title='linkedin'
        />
      )}
      {urls.github && (
        <SocialIcon
          className='mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white'
          url={urls.github}
          title='github'
        />
      )}
      {urls.medium && (
        <SocialIcon
          className='mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white'
          url={urls.medium}
          title='medium'
        />
      )}
    </footer>
  );
}
