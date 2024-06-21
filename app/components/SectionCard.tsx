'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
      className='container my-4 md:my-8 md:w-[85%]'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      {...props}
    >
      <h2 className='text-3xl font-bold mb-4'>{title}</h2>
      <div className='bg-[rgb(53,78,142)] rounded-lg p-2 md:p-6'>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionCard;
