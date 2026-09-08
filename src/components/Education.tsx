import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import './css/About.css';

const pdfFiles = {
  es: {
    href: `${process.env.PUBLIC_URL}/CV_Felipe_Canseco_ES.pdf`,
    filename: 'CV_Felipe_Canseco_ES.pdf',
  },
  en: {
    href: `${process.env.PUBLIC_URL}/CV_Felipe_Canseco_EN.pdf`,
    filename: 'CV_Felipe_Canseco_EN.pdf',
  },
};

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="education-page">
      <section className="education-download">
        <h2 className="education-heading">{t.education.downloadTitle}</h2>
        <div className="education-download-row">
          <div className="education-download-col">
            <p className="education-download-caption">{t.education.esCaption}</p>
            <a className="education-download-btn" href={pdfFiles.es.href} download={pdfFiles.es.filename}>
              <FaDownload aria-hidden />
              {t.education.esButton}
            </a>
          </div>
          <div className="education-download-col">
            <p className="education-download-caption">{t.education.enCaption}</p>
            <a className="education-download-btn" href={pdfFiles.en.href} download={pdfFiles.en.filename}>
              <FaDownload aria-hidden />
              {t.education.enButton}
            </a>
          </div>
        </div>
      </section>

      <section className="education-list">
        <h2 className="education-heading">{t.education.title}</h2>
        {t.education.items.map((edu, index) => {
          const isCurrent = 'status' in edu && Boolean(edu.status);
          return (
            <motion.div
              key={`${edu.year}-${edu.degree}-${index}`}
              className={isCurrent ? 'education-highlight' : 'education-item'}
              whileHover={{ color: 'var(--accent-color)' }}
            >
              <p className="education-year">
                {edu.year}
                {isCurrent ? ` · ${edu.status}` : ''}
              </p>
              <p className="education-line">{edu.school}</p>
              <p className="education-line">{edu.degree}</p>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default Education;
