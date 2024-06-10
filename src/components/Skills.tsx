import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillsData = [
    'C#',
    'DotNet',
    'REST',
    'AWS',
    'Entity Framework',
    'Python',
    'MySQL',
    'CSS',
    'JavaScript',
    'HTML5',
    'PHP',
    'Vue.JS',
  ];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <div style={{ maxWidth: '600px', marginLeft: '20px' }}>
        <h2 style={{ color: '#22c55e', textAlign: 'left', fontSize: '35px', marginBottom: '20px' }}>Skills</h2>
        {skillsData.map((skill, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p style={{ color: '#22c55e', marginBottom: '5px', textAlign: 'left' }}>{skill}</p>
            <motion.div
              style={{ backgroundColor: '#22c55e', height: '20px', borderRadius: '10px', width: '100vw' }}
              initial={{ width: 0 }}
              animate={{ width: '80vw' }}
              transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            >
              <p style={{ color: 'black', textAlign: 'center', lineHeight: '20px', margin: 0, padding: 0 }}>{'80%'}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
