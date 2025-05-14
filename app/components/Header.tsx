'use client';
// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { sections } from '../lib/schema';
import rawData from '../../public/data.json';

const Header: React.FC<{
  handleHeaderClick: (sectionId: string) => void;
  activeSection: string | null;
}> = ({ handleHeaderClick, activeSection }) => {
  const portfolioName = rawData.name;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="fixed top-2 right-4 z-[1100] sm:hidden">
        <button
          aria-label="Open menu"
          className="flex flex-col gap-1 w-8 h-8 justify-center items-center bg-primary-blue-bg rounded-md shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/60 transition-all duration-200"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-1 w-8 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#666', border: '1px solid black', borderRadius: '10px', padding: '2px' }}></span>
          <span className={`block h-1 w-8 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#666', border: '1px solid black', borderRadius: '10px', padding: '2px' }}></span>
          <span className={`block h-1 w-8 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#666', border: '1px solid black', borderRadius: '10px', padding: '2px' }}></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <nav
        className={`fixed top-0 left-0 w-full bg-[#333] p-2 flex-col justify-center items-center z-[1050] h-screen transition-transform duration-300 sm:hidden ${menuOpen ? 'flex translate-y-0' : 'hidden -translate-y-full'}`}
      >
        {sections.map((section) => (
          <h2
            key={`${section.id}-header-mobile`}
            className={`${activeSection === section.id ? 'active' : ''} p-4 rounded-md text-2xl font-semibold w-full text-center`}
          >
            <Link
              href={`#${section.id}`}
              shallow
              className={`${activeSection === section.id ? 'active' : ''} flex justify-center transition-colors duration-200 hover:text-blue-300`}
              onClick={() => {
                handleHeaderClick(section.id);
                setMenuOpen(false);
              }}
              prefetch={true}
              scroll={false}
            >
              {section.title}
            </Link>
          </h2>
        ))}
      </nav>
      {/* Desktop nav */}
      <nav className="fixed top-0 left-0 w-full bg-[#333] p-2 justify-around z-[1000] h-14 hidden md:flex shadow-md shadow-black/50">
        {sections.map((section) => (
          <h2
            key={`${section.id}-header`}
            className={`${activeSection === section.id ? 'active' : ''} p-2 rounded-md text-xl font-semibold`}
          >
            <Link
              href={`#${section.id}`}
              shallow
              className={`${activeSection === section.id ? 'active' : ''} justify-center flex transition-colors duration-200 hover:text-blue-300`}
              onClick={() => handleHeaderClick(section.id)}
              prefetch={true}
              scroll={false}
            >
              {section.title}
            </Link>
          </h2>
        ))}
      </nav>
      <header id='header' className='transition-all duration-500 animate-fadeIn'>
        <h1 className='text-4xl font-semibold capitalize text-center'>
          {portfolioName}&apos;s Portfolio
        </h1>
      </header>
    </>
  );
};

export default Header;
