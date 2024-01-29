"use client";

import React, { ReactNode, useEffect, useRef } from "react";

export interface SectionCardProps {
  title: string;
  id?: string;
  children: ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, id, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the section ID to the URL when the section is in view
          history.replaceState(null, document.title, `#${id}`);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentSectionRef = sectionRef.current; // Copy ref value to a variable

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [id]);

  return (
    <section
      className="container mx-auto my-8 scroll-mt-20 px-4"
      id={id}
      ref={sectionRef}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;
