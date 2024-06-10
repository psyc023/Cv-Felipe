import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const educationData = [
    { year: '2022', description: 'Tecnologico Nacional de Mexico Campus Oaxaca.\nComputer Systems Engineering.' },
    { year: '2015', description: 'Computacion del golfo Oaxaca.\nTechnician in Graphic Design.' },
    { year: '2015', description: 'Computacion del golfo Oaxaca.\nIT Technician.' },
  ];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Education Section */}
      <div style={{ maxWidth: '400px', marginRight: '20px' }}>
        <h2 style={{ color: '#22c55e', textAlign: 'center', fontSize: '35px', marginBottom: '20px' }}>Education</h2>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            style={{ marginBottom: '20px', borderLeft: '5px solid white', paddingLeft: '10px' }}
            whileHover={{ color: '#22c55e' }}
          >
            <p style={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '20px', color: '#22c55e' }}>{edu.year}</p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{edu.description.split('\n')[0]}</p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>{edu.description.split('\n')[1]}</p>
          </motion.div>
        ))}
      </div>

      {/* Social Media and Download CV Section */}
      <div>
        <h2 style={{ color: '#22c55e', textAlign: 'center', fontSize: '35px', marginBottom: '20px' }}>Social Media</h2>
        <div style={{ textAlign: 'center' }}>
          <motion.button whileHover={{ color: '#22c55e', backgroundColor: '#fff' }} style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Linkedin</motion.button>
          <motion.button whileHover={{ color: '#22c55e', backgroundColor: '#fff' }} style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Github</motion.button>
          <motion.button whileHover={{ color: '#22c55e', backgroundColor: '#fff' }} style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '10px' }}>Gmail</motion.button>
        </div>
        <h2 style={{ color: '#22c55e', textAlign: 'center', fontSize: '35px', marginBottom: '20px', marginTop: '50px' }}>Download CV</h2>
        <div style={{ textAlign: 'center' }}>
          <motion.button whileHover={{ backgroundColor: '#22c55e', color: '#fff' }} style={{ color: '#22c55e', backgroundColor: 'transparent', border: '2px solid #22c55e', borderRadius: '5px', padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>Español CV</motion.button>
          <motion.button whileHover={{ backgroundColor: '#22c55e', color: '#fff' }} style={{ color: '#22c55e', backgroundColor: 'transparent', border: '2px solid #22c55e', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>English CV</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Education;
