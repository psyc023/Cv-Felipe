import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  id: string;
  className?: string; // Hacer className opcional
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, className, children }) => {
  return (
    <motion.div
      id={id}
      className={`${className}`} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
     
      {children}
    </motion.div>
  );
};

export default Section;
