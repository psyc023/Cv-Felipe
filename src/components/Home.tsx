import React from 'react';
import bmopng from '../assets/bmo.png';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: 30, color: 'white' }}>{t.home.hello}</p>
          <p style={{ fontSize: 60, color: 'white', fontWeight: 'bold', marginBottom: '10px' }}>Felipe <br /> Canseco</p>
          <p style={{ fontSize: 30, color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold', marginBottom: '20px' }}>{t.home.role}</p>
          <button
            style={{ backgroundColor: 'var(--accent-color)', color: 'black', padding: '10px 20px', fontSize: 20, borderRadius: '20px' }}
            onClick={scrollToContact}
          >
            {t.home.contact}
          </button>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.img
          src={bmopng}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Home;
