'use client';
// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { sections } from '../lib/dataInterfaces';

const Header: React.FC<{
  handleHeaderClick: (sectionId: string) => void;
  activeSection: string | null;
}> = ({ handleHeaderClick, activeSection }) => {
  return (
    <header className='mt-24' id='header'>
      <nav>
        {sections.map((section) => (
          <h2
            key={`${section.id}-header`}
            className={`${
              activeSection === section.id ? 'active' : ''
            } p-2 rounded-md`}
          >
            <Link
              href={`#${section.id}`}
              shallow
              className={`${activeSection === section.id ? 'active' : ''}`}
              onClick={() => handleHeaderClick(section.id)}
              prefetch={true}
              scroll={false}
            >
              {section.title}
            </Link>
          </h2>
        ))}
      </nav>
      <h1 className='text-3xl font-medium capitalize text-center'>
        Rashaun Warner&apos;s Portfolio
      </h1>
    </header>
  );
};

export default Header;
