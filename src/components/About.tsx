import React from 'react';
import bmopng from '../assets/feli.png';
import './css/About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
        <div className="about-img-container">
        <img className="about-img" src={bmopng} alt="BMO" />
      </div>
      <div className="about-text">
        <p style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>Hi There! I'm Felipe Canseco</p>
        <p style={{ fontSize: 30, color: '#22c55e', marginBottom: '20px' }}>Full stack developer</p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '20px' }}>
          As a Full Stack Developer, I bring extensive experience in software engineering, development, and technical support across diverse platforms and technologies. My career has been highlighted by roles at prestigious companies like Samsung Electronics, where I honed my skills in both front-end and back-end development and testing.
        </p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Phone: +52 951 114 9349</p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Email: felipe95jcl@gmail.com</p>
        <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Languages: English, Spanish, Japanese, German</p>
        <p style={{ fontSize: 20, color: 'white' }}>Location: Oaxaca, Mexico</p>
        <p style={{ fontSize: 20, color: 'white' }}>Remote: Available</p>
      </div>
      
    </div >
  );
};

export default About;
