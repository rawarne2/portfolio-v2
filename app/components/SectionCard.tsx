"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      { threshold: 0.5 }
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
    <motion.section
      className="container my-4 md:my-8 scroll-mt-20 md:w-3/4"
      id={id}
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="bg-white dark:bg-[rgb(17,23,35)] rounded-lg p-2 md:p-8">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionCard;
