import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      description: `
• Development and Technical Support.
• Experience in testing and developing TV and Android applications (Tizen, Android).
• App code modification (Front).
• Project documentation.
• Version control tools like Git and Gogs for efficient code management and collaboration.
• Experience with HTML5, CSS, and Vue.js in application development.
• .NET, .NET Core, Entity Framework, and LINQ for development.
• Experience with AWS services.
• Windows Services Experience.
• IIS.
• API Experience consuming and developing, using JavaScript (JS), (TS) and ASP.
• C++ development.
      `,
    },
    {
      title: 'Software Engineer',
      company: 'Samsung Electronics (SRT Samsung Research Tijuana)',
      period: '04/2022 - 05/2023',
      description: `
• Testing and development for TV and Android applications (Tizen, Android).
• Led Metadata research for an IoT application, collaborating on the development and implementation of metadata functionality.
• TAM (Technical Account Manager): Gathering partner requirements (scope, timeline, etc.) Managing timely releases and providing technical support during implementation.
• Support for launching US and LATAM applications for new products.
• App code modification.
• Project documentation.
• Version control tools like Git and Gogs.
• Software Management: Magic Info and Knox for real-time screen monitoring, updating, modifying, and deploying applications.
• HTML5, CSS, and Vue.js.
• .NET, .NET Core, Entity Framework, LINQ.
• AWS services (EC2, RDS, Lambda, CloudWatch, API Gateway), including database migration to Zoho CRM.
      `,
    },
    {
      title: 'Backend Developer',
      company: 'Mezcal Espina Negra',
      period: '05/2021 - 04/2022',
      description: `
• .NET 5, C#, HTML5, Bootstrap.
• SQL Database Management.
• Server and Database Administration.
• Windows Services Experience.
• IIS.
• API Experience consuming and developing using JavaScript (JS) and ASP.
• Postman for API development, testing, and debugging.
      `,
    },
    {
      title: 'Full Stack Developer',
      company: 'Holazo Sports',
      period: '01/2020 - 07/2021',
      description: `
• JavaScript (JS), C#, Tailwind CSS, Ruby on Rails.
• IIS.
• SQL Database Management.
• Server and Database Administration.
• Postman for API development, testing, and debugging.
• Web System Development.
• Database Management (Data Migration, Performance Optimization, Documentation).
      `,
    },
  ];

  const splitPeriod = (period: string) => {
    // soporta: "07/2024 - Currently" y también "07/2024 – Currently"
    const parts = period.split('–').length > 1 ? period.split('–') : period.split('-');
    const start = (parts[0] ?? '').trim();
    const end = (parts[1] ?? '').trim();
    return { start, end };
  };

  const renderBullets = (text: string) =>
    text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line}
        </p>
      ));

  return (
    <div className="bg-black text-white flex justify-center py-10 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <h5 className="text-green-500 text-center text-2xl mb-8 font-bold">
          EXPERIENCE
        </h5>

        <div className="space-y-8">
          {experienceData.map((exp, index) => {
            const isOpen = expandedIndex === index;
            const { start, end } = splitPeriod(exp.period);

            return (
              <motion.div key={index} whileHover={{ color: '#22c55e' }}>
                {/* ✅ Mobile */}
                <div className="sm:hidden">
                  <div className="border border-white/20 rounded-xl p-5">
                    <p className="text-green-500 font-bold text-center">{exp.company}</p>
                    <p className="text-center font-bold text-lg mt-1">{exp.title}</p>
                    <p className="text-center text-sm text-gray-300 mt-1">{exp.period}</p>

                    <motion.button
                      onClick={() => toggleExpand(index)}
                      className="text-orange-500 bg-transparent border-none cursor-pointer mt-4 mx-auto flex items-center"
                      whileHover={{ color: '#22c55e' }}
                    >
                      {isOpen ? 'Show less' : 'Show more'}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-4"
                        >
                          <div className="space-y-2 text-left">
                            {renderBullets(exp.description)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* ✅ Desktop Timeline + Card */}
                <div className="hidden sm:grid grid-cols-[160px_32px_1fr] gap-x-6 items-start">
                  {/* Left: Period */}
                  <div className="text-right leading-tight text-white pt-3">
                    <p className="text-lg">{start}</p>
                    <p className="text-lg">{end}</p>
                  </div>

                  {/* Middle: Line */}
                  <div className="flex justify-center pt-3">
                    <div className="w-[3px] bg-white h-full min-h-[70px]" />
                  </div>

                  {/* Right: Card */}
                  <motion.div
                    className="border border-white/20 rounded-xl p-6 bg-black"
                    whileHover={{ borderColor: '#22c55e' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center">
                      <p className="text-green-500 font-bold text-xl">{exp.company}</p>
                      <p className="font-bold text-xl mt-1">{exp.title}</p>
                    </div>

                    <motion.button
                      onClick={() => toggleExpand(index)}
                      className="text-orange-500 bg-transparent border-none cursor-pointer mt-4 mx-auto flex items-center"
                      whileHover={{ color: '#22c55e' }}
                    >
                      {isOpen ? 'Show less' : 'Show more'}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-5"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            {renderBullets(exp.description)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
