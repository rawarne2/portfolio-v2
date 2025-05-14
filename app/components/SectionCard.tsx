'use client';
import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

export interface SectionCardProps {
  title: string;
  children: ReactNode;
  [key: string]: any;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <motion.section
      className='section-card mb-8'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      {...props}
    >
      <h2 className='text-2xl font-semibold my-4 ml-4'>{title}</h2>
      <div className='bg-gradient-to-br from-gray-700 via-blue-800 to-gray-700 rounded-lg p-4 md:p-12 lg:p-16 shadow-lg shadow-black/60'>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionCard;
