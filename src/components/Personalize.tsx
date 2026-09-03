import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const DEFAULT_ACCENT = '#22c55e';

const Personalize: React.FC = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [color, setColor] = useState(DEFAULT_ACCENT);
  const [colorPicked, setColorPicked] = useState(false);

  const hasName = name.trim().length > 0;
  const showMessage = hasName && colorPicked;

  useEffect(() => {
    const root = document.documentElement;
    if (hasName && colorPicked) {
      root.style.setProperty('--accent-color', color);
    } else {
      root.style.removeProperty('--accent-color');
    }

    return () => {
      root.style.removeProperty('--accent-color');
    };
  }, [hasName, colorPicked, color]);

  const handleClear = () => {
    setName('');
    setColor(DEFAULT_ACCENT);
    setColorPicked(false);
  };

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('Experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="relative w-full max-w-xl mx-auto">
        {hasName && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-0 top-0 text-sm text-gray-500 hover:text-gray-300 bg-transparent border-none cursor-pointer"
          >
            {t.personalize.clear}
          </button>
        )}

        <div className="flex flex-col items-center text-center pt-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.personalize.placeholder}
            autoComplete="off"
            className="w-full max-w-xs sm:max-w-sm bg-black text-white text-center text-lg px-5 py-3 rounded-full border border-white/25 placeholder-gray-500 outline-none focus:border-accent"
          />

          {hasName && (
            <p className="personalize-step mt-8 text-white text-lg">
              {t.personalize.greeting.replace('{name}', name.trim())}
            </p>
          )}

          {hasName && (
            <div className="personalize-step mt-10 flex flex-col items-center">
              <p className="text-white mb-4">{t.personalize.selectColor}</p>
              <input
                type="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                  setColorPicked(true);
                }}
                className="personalize-color"
                aria-label={t.personalize.selectColor}
              />
            </div>
          )}

          {showMessage && (
            <motion.div
              className="mt-10 flex flex-col items-center max-w-md"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            >
              <p className="text-white text-lg mb-3">
                {t.personalize.styleAdded}
              </p>
              <p className="text-gray-400 mb-8">
                {t.personalize.lookAround}
              </p>
              <button
                type="button"
                onClick={scrollToExperience}
                className="text-accent bg-transparent border-none cursor-pointer text-base"
              >
                {t.personalize.explore}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Personalize;
