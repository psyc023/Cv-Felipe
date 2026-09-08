import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';
import './css/About.css';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const buttonHover = {
    backgroundColor: 'var(--accent-color)',
    color: '#fff'
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px'
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      justifyContent: 'center',
      alignItems: 'start',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '400px', marginRight: '20px' }}>
        <h2 style={{ color: 'var(--accent-color)', textAlign: 'center', fontSize: '35px', marginBottom: '20px' }}>{t.education.title}</h2>
        {t.education.items.map((edu, index) => {
          const isCurrent = 'status' in edu && Boolean(edu.status);
          return (
          <motion.div
            key={`${edu.year}-${edu.degree}-${index}`}
            className={isCurrent ? 'education-highlight' : undefined}
            style={isCurrent ? undefined : { marginBottom: '20px', borderLeft: '5px solid white', paddingLeft: '10px' }}
            whileHover={{ color: 'var(--accent-color)' }}
          >
            <p style={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '20px', color: 'var(--accent-color)' }}>
              {edu.year}
              {isCurrent ? ` · ${edu.status}` : ''}
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{edu.school}</p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{edu.degree}</p>
          </motion.div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: 'var(--accent-color)', textAlign: 'center', fontSize: '35px', marginBottom: '20px' }}>{t.education.social}</h2>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <a href="https://www.linkedin.com/in/felipe-canseco-lopez" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={buttonHover} style={buttonStyle}>
              <FaLinkedin className="mr-2 text-xl" style={{ marginRight: '10px' }} /> Linkedin
            </motion.button>
          </a>
          <a href="https://github.com/psyc023" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={buttonHover} style={buttonStyle}>
              <FaGithub className="mr-2 text-xl" style={{ marginRight: '10px' }} /> Github
            </motion.button>
          </a>
          <a href="mailto:feli.canseco.95@gmail.com" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={buttonHover} style={buttonStyle}>
              <FaEnvelope className="mr-2 text-xl" style={{ marginRight: '10px' }} /> Gmail
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
