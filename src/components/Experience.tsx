import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const experienceData = [
    {
      title: 'Software Engineer',
      company: 'Samsung Electronics (SRT Samsung Research Tijuana)',
      period: '04/2022 - 02/2024',
      description: `Development and Technical Support\n• Testing\n• Experience in testing and developing TV and Android applications (Tizen, Android)\n• Led Metadata research for an IoT application, collaborating on the development and implementation of metadata functionality.\n• TAM (Technical Account Manager): Gathering partner requirements (scope, timeline, etc.) Managing the timely release of the application, providing technical support in case of any issues during app implementation.\n• Support for launching all US and LATAM applications for new products\n• App code modification\n• Project documentation\n• Version control tools like Git and Gogs for efficient code management and collaboration. Skilled in documenting projects to ensure clarity and maintain comprehensive records.\n• Software Management: Proficient in administering programs like Magic Info and Knox for real-time screen monitoring, updating, modifying, and deploying applications.\n• Experience with HTML5, CSS, and Vue.js in application development.\n• .NET, .NET Core, Entity Framework, and LINQ for development.\n• Experience with AWS services (EC2, RDS, Lambda, CloudWatch, API Gateway) including database migration to zoho CRM.`,
    },
    {
      title: 'Backend Developer',
      company: 'Mezcal Espina Negra',
      period: '05/2021 - 04/2022',
      description: `• .net 5, C#, html 5, boostrap\n• SQL Database Management\n• Server and Database Administration\nSkilled in managing servers with databases.\n• Windows Services Experience.\n• IIS\n• API Experience consuming and developing, using JavaScript (JS) and ASP.\n• Postman for efficient API development, testing, and debugging.`,
    },
    {
      title: 'Full Stack Developer',
      company: 'Holazo Sports',
      period: '01/2020 - 07/2021',
      description: `Development\n• JavaScript (JS), C#, tailwind css, Ruby on Rails\n• IIS\n• SQL Database Management\n• Server and Database Administration\n• Postman for efficient API development, testing, and debugging.\n• Web System Development\n• Database Magnament (Data Migration, Performance Optimization,Database Documentation)`,
    },
  ];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
      {/* Experience Column */}
      <div style={{ flex: 1, textAlign: 'left', margin: '0 auto', maxWidth: '800px' }}>
        <h2 style={{ color: '#22c55e', textAlign: 'center', fontSize: '30px', marginBottom: '20px' }}>Experience</h2>
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ color: '#22c55e' }}
            style={{ marginBottom: '20px', borderLeft: '5px solid white', paddingLeft: '10px' }}
          >
            <p style={{ marginBottom: '5px', fontWeight: 'bold', fontSize: '20px', color: '#22c55e', textAlign: 'center' }}>{exp.title}</p>
            <p style={{ marginBottom: '5px', color: '#22c55e', textAlign: 'center' }}>{exp.period}</p>
            <p style={{ marginBottom: '5px', color: '#22c55e', textAlign: 'center', fontWeight: 'bold' }}>{exp.company}</p>
            {expanded && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '20px' }}>
                {exp.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
            <button onClick={handleExpand} style={{ color: '#ff9900', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginLeft: '10px', display: 'block', margin: '0 auto' }}>
              {expanded ? 'Mostrar menos' : 'Mostrar más'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
