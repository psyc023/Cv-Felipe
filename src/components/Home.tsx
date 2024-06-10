import React from 'react';
import bmopng from '../assets/bmo.png';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex' }}>
      {/* Columna izquierda */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: 30, color: 'white' }}>Hello, I'm</p>
          <p style={{ fontSize: 60, color: 'white', fontWeight: 'bold', marginBottom: '10px' }}>Felipe <br /> Canseco</p>
          <p style={{ fontSize: 30, color: 'rgba(255, 255, 255, 0.5)', fontWeight: 'bold', marginBottom: '20px' }}>Full Stack Developer</p>
          <button style={{ backgroundColor: '#22c55e', color: 'black', padding: '10px 20px', fontSize: 20, borderRadius: '20px' }}>Contact</button>
        </div>
      </div>
      {/* Columna derecha */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.img
          src={bmopng}
          initial={{ scale: 0, filter: 'brightness(0)' }}
          animate={{ scale: 1, filter: 'brightness(1)', y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default Home;
