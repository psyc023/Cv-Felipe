import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const MainProjects: React.FC = () => {
  const { t, content } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const projectsData = content.mainProjects;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderBullets = (text: string) =>
    text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line}
        </p>
      ));

  return (
    <div className="bg-black text-white py-12 flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <h5 className="text-accent text-center text-2xl mb-8 font-bold">
          {t.mainProjects.title}
        </h5>

        <div className="space-y-6">
          {projectsData.map((proj, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="border border-white/20 rounded-xl p-6 bg-black"
                whileHover={{ borderColor: 'var(--accent-color)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center">
                  {proj.company && (
                    <p className="text-accent font-bold text-lg mb-1">
                      {proj.company}
                    </p>
                  )}
                  <p className="font-bold text-xl">{proj.title}</p>
                </div>

                <motion.button
                  onClick={() => toggleExpand(index)}
                  className="text-orange-500 bg-transparent border-none cursor-pointer mt-4 mx-auto flex items-center"
                  whileHover={{ color: 'var(--accent-color)' }}
                >
                  {isOpen ? t.common.showLess : t.common.showMore}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-accent font-semibold mb-2">
                            {t.mainProjects.built}
                          </p>
                          {renderBullets(proj.description)}
                        </div>

                        <div>
                          <p className="text-accent font-semibold mb-2">
                            {t.mainProjects.impact}
                          </p>
                          {renderBullets(proj.impact)}
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mt-5 text-center">
                        {proj.tech}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
