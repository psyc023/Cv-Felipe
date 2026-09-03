import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white py-12 flex justify-center">
      <div className="w-full max-w-3xl mx-auto px-6">
        <h5 className="text-accent text-center text-2xl mb-8 font-bold">
          {t.certifications.title}
        </h5>
        <motion.div
          className="border-2 border-accent rounded-xl p-6 sm:p-8 bg-black text-center"
          whileHover={{ boxShadow: '0 0 28px color-mix(in srgb, var(--accent-color) 28%, transparent)' }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-accent text-xs font-bold tracking-[0.25em] mb-3">{t.certifications.badge}</p>
          <p className="text-white text-xl sm:text-2xl font-bold leading-tight">
            {t.certifications.name}
          </p>
          <p className="text-accent font-bold text-lg mt-3">{t.certifications.issuer}</p>
          <p className="text-gray-300 text-sm mt-3">
            {t.certifications.dates}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-4 font-mono break-all">
            {t.certifications.credentialId}: cb87fb03-322e-4ee3-974c-297075f43d14
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
