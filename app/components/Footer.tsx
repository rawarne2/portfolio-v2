'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className='flex items-center flex-wrap p-4'>
      <SocialIcon
        className='mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white'
        url='https://www.linkedin.com'
        title='linkedin'
      />
      <SocialIcon
        className='mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white'
        url='https://github.com'
        title='github'
      />
      <SocialIcon
        className='mx-8 max-sm:mx-2 rounded-full border-[0.15rem] border-white'
        url='https://medium.com'
        title='medium'
      />
    </footer>
  );
}
