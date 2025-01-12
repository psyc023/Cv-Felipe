import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experienceData = [
    {
      title: 'Full Stack Developer',
      company: 'AppWhere',
      period: '07/2024 - Currently',
      description: `
        • Frontend and Backend Development.
        • Creation and maintenance of user interfaces using HTML5, CSS, Bootstrap, and React.
        • Development of web applications with .NET, Entity Framework, and LINQ.
        • Consumption and development of REST APIs using JavaScript and .NET.
        • Database management with SQL, including query design and maintenance of relational structures.
        • Testing and debugging applications using tools like Postman and unit/integration testing frameworks.
        • Version control using Git for branch management, conflict resolution, and team collaboration.
        • Development and customization of UI components using Telerik UI to enhance user experience.
        • Experience with REST APIs and implementing software architectures such as Factory.
        `,
    },
    {
      title: 'Full Stack Developer',
      company: 'Upax Grupo Salinas',
      period: '06/2023 - 06/2024',
      description: ` • Development and Technical Support 
        • Experience in testing and developing TV and Android applications (Tizen, Android) 
        • App code modification (Front)
        • Project documentation 
        • Version control tools like Git and Gogs for efficient code management and collaboration. Skilled in documenting projects to ensure clarity and maintain comprehensive records. 
        • Experience with HTML5, CSS, and Vue.js in application development. 
        • .NET, .NET Core, Entity Framework, and LINQ for development. 
        • Experience with AWS services
        • Windows Services Experience. 
        • IIS
        • API Experience consuming and developing, using JavaScript (JS), (TS) and ASP. 
        • C++ development
        `,
    },
    {
      title: 'Software Engineer',
      company: 'Samsung Electronics (SRT Samsung Research Tijuana)',
      period: '04/2022 - 05/2023',
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
    <div className="bg-black min-h-screen text-white flex justify-center items-center p-10">
      <div className="w-full max-w-3xl mx-auto text-left">
        <h5 className="text-green-500 text-center text-2xl mb-5 font-bold">EXPERIENCE</h5>
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ color: '#22c55e' }}
            className="mb-5 flex flex-col sm:flex-row sm:items-start"
          >
            {/* Para móviles el diseño anterior */}
            <div className="sm:hidden mb-2">
              <p className="text-green-500 font-bold text-center">{exp.title}</p>
              <p className="text-center">{exp.period}</p>
              <p className="text-center font-bold">{exp.company}</p>
            </div>

            {/* Para pantallas grandes (PC) */}
            <div className="hidden sm:flex w-32 text-xl text-white-500 items-center">
              <p>{exp.period}</p>
            </div>

            <div className="border-l-4 border-white text-white-500 pl-3 flex-1 mx-10">
              <p className="mb-2 text-xl text-green-500 text-center font-bold hidden sm:block">
                {exp.company}
              </p>
              <p className="mb-2 font-bold text-xl text-center hidden sm:block">{exp.title}</p>

              {/* Descripción expandida */}
              {expandedIndex === index && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </div>
              )}

              {/* Botón para expandir/contraer */}
              <motion.button
                onClick={() => toggleExpand(index)}
                className="text-orange-500 bg-transparent border-none cursor-pointer mt-3 block mx-auto flex items-center"
                whileHover={{ color: '#22c55e' }}
              >
                {expandedIndex === index ? (
                  <>
                    Show less
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 7.414L5.707 11.707a1 1 0 11-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 11-1.414-1.414L10 7.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Show more
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
