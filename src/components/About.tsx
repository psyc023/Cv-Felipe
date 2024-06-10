import React from 'react';
import bmopng from '../assets/feli.png';

const About: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex' }}>
      {/* Columna izquierda */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={bmopng} style={{ maxWidth: '80%', height: 'auto' }} alt="BMO" />
      </div>
      {/* Columna derecha */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px' }}>
        <p style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>Hi There! I'm Felipe Canseco</p>
        <p style={{ fontSize: 30, color: '#22c55e', marginBottom: '20px' }}>Full stack developer</p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '20px' }}>
          As a Full Stack Developer, I bring extensive experience in software engineering, development, and technical support across diverse platforms and technologies. My career has been highlighted by roles at prestigious companies like Samsung Electronics, where I honed my skills in both front-end and back-end development and testing.
        </p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Phone: +52 951 114 9349</p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Email: felipejcl@gmail.com</p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Languages: English, Spanish, Japanese, German</p>
        <p style={{ fontSize: 20, color: 'white' }}>Location: Oaxaca,Mexico</p>
        <p style={{ fontSize: 20, color: 'white' }}>Remote: Available</p>
      </div>
    </div>
  );
};

export default About;
