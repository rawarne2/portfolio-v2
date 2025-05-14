'use client';
import React, { useEffect, useRef, useState } from 'react';
import AboutMe from './components/AboutMe';
import { Blogs } from './components/Blogs';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import { Projects } from './components/Projects';
import Skills from './components/Skills';
import { sections } from './lib/schema';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('about-me');
  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement> })
  );
  const router = useRouter();

  useEffect(() => {
    // always start at about-me section
    router.push('#about-me', {
      scroll: false,
    });
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });

    // observer for active section in header
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && entry.target.id !== activeSection) {
          setActiveSection(entry.target.id);
          router.push(`#${entry.target.id}`, {
            scroll: false,
          });
        } else if (entry.isIntersecting && entry.target.id === 'about-me') {
          setActiveSection('about-me');
          router.push(`#about-me`, {
            scroll: false,
          });
        }
      },
      { threshold: [0.1, 0.9] }
    );
    for (const section of Object.values(sectionRefs.current)) {
      observer.observe(section?.current as HTMLDivElement);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // set active section and scroll to it when clicking section in header
  const handleHeaderClick = (sectionId: string) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId]?.current?.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });
    router.push(`#${sectionId}`);
  };

  return (
    <main className='flex flex-col items-center max-w-screen-lg mx-auto mt-16 md:mt-20'>
      <Header
        handleHeaderClick={handleHeaderClick}
        activeSection={activeSection}
      />
      <AboutMe sectionRef={sectionRefs.current['about-me']} />
      <Projects sectionRef={sectionRefs.current['projects']} />
      <Experience sectionRef={sectionRefs.current['experience']} />
      <Blogs sectionRef={sectionRefs.current['blogs']} />
      <Skills sectionRef={sectionRefs.current['skills']} />
      <Footer />
    </main>
  );
}
