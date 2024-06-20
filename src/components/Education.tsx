import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Education: React.FC = () => {
  const educationData = [
    { year: '2022', description: 'Tecnologico Nacional de Mexico Campus Oaxaca.\nComputer Systems Engineering.' },
    { year: '2015', description: 'Computacion del golfo Oaxaca.\nTechnician in Graphic Design.' },
    { year: '2015', description: 'Computacion del golfo Oaxaca.\nIT Technician.' },
  ];

  const buttonHover = {
    backgroundColor: '#22c55e',
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
      gridTemplateColumns: 'auto auto', // Dos columnas de ancho automático
      justifyContent: 'center', 
      alignItems: 'start', // Alinear los elementos en la parte superior
      padding: '20px'
    }}>
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
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#22c55e', textAlign: 'center', fontSize: '35px', marginBottom: '20px' }}>Social Media</h2>
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
          <a href="mailto:felipe95jcl@gmail.com" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={buttonHover} style={buttonStyle}>
              <FaEnvelope className="mr-2 text-xl" style={{ marginRight: '10px' }} /> Gmail
            </motion.button>
          </a>
        </div>
        <h2 style={{ color: '#22c55e', textAlign: 'center', fontSize: '35px', marginBottom: '20px' }}>Download CV</h2>
        <div style={{ textAlign: 'center' }}>
          <div>
            <a href="https://psyc023.github.io/Cv-Felipe/build/FelipeCansecoEn.pdf" download>
              <motion.button whileHover={{ backgroundColor: '#22c55e', color: '#fff' }} 
                style={{ 
                  color: '#22c55e', 
                  backgroundColor: 'transparent', 
                  border: '2px solid #22c55e', 
                  borderRadius: '5px', 
                  padding: '10px 20px', 
                  margin: '5px',
                  fontSize: '25px'
                }}
              >
                English CV
              </motion.button>
            </a>
            <a href="https://psyc023.github.io/Cv-Felipe/build/FelipeCansecoEs.pdf" download>
              <motion.button whileHover={{ backgroundColor: '#22c55e', color: '#fff' }} 
                style={{ 
                  color: '#22c55e', 
                  backgroundColor: 'transparent', 
                  border: '2px solid #22c55e', 
                  borderRadius: '5px', 
                  padding: '10px 20px', 
                  margin: '5px',
                  fontSize: '25px'
                }}
              >
                Español CV
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
