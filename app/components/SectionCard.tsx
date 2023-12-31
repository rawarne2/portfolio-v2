import React, { ReactNode } from "react";

export interface SectionCardProps {
  title: string;
  id: string;
  children: ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, id, children }) => {
  return (
    <section className="container mx-auto my-8 px-4 sm:px-6 lg:px-8" id={id}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-4 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;
