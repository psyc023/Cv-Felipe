import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MainProjects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projectsData = [
    {
      title: 'AI Interview Processing Platform',
      // period: '2024 – Present', // ya no se usa (puedes borrarlo)
      company: 'AI Interview Platform',
      description: `
• Architected and implemented a distributed AI-driven media processing system using Azure Functions, event-driven workflows, and cloud-native services.
• Designed scalable transcription and media automation pipelines ensuring reliability and high-throughput processing.
      `,
      impact: `
• Reduced processing latency, improved system scalability, and enabled automated AI transcription workflows for production environments.
      `,
      tech: `Tech: .NET • Azure Functions • Event-driven Architecture • Blob Storage • Microservices`,
    },
    {
      title: 'Microservices & Cloud Architecture',
      company: 'Cloud Platform',
      description: `
• Designed and implemented distributed backend architecture using containerized microservices, domain-driven design (DDD), and scalable REST/GraphQL APIs.
• Focused on system modularity, performance, and cloud-native deployment strategies.
      `,
      impact: `
• Improved maintainability, scalability, and service isolation enabling reliable deployments and CI/CD automation.
      `,
      tech: `Tech: .NET • Docker • Microservices • GraphQL • CI/CD • Cloud Architecture`,
    },
    {
      title: 'Real-time Media & Transcription System',
      company: 'Media Pipelines',
      description: `
• Engineered real-time media processing pipelines integrating AI-based speech recognition and automated transcription workflows.
• Designed asynchronous processing and background job orchestration for high-performance media handling.
      `,
      impact: `
• Enabled real-time AI transcription and automated workflows improving operational efficiency and processing throughput.
      `,
      tech: `Tech: Whisper AI • Media Processing • Async Pipelines • Automation • Cloud Systems`,
    },
  ];

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
    <div className="bg-black text-white py-12 flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <h5 className="text-green-500 text-center text-2xl mb-8 font-bold">
          MAIN PROJECTS
        </h5>

        <div className="space-y-6">
          {projectsData.map((proj, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="border border-white/20 rounded-xl p-6 bg-black"
                whileHover={{ borderColor: '#22c55e' }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="text-center">
                  {proj.company && (
                    <p className="text-green-500 font-bold text-lg mb-1">
                      {proj.company}
                    </p>
                  )}
                  <p className="font-bold text-xl">{proj.title}</p>
                </div>

                {/* Toggle */}
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

                {/* Expanded */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-green-500 font-semibold mb-2">
                            What I built
                          </p>
                          {renderBullets(proj.description)}
                        </div>

                        <div>
                          <p className="text-green-500 font-semibold mb-2">
                            Impact
                          </p>
                          {renderBullets(proj.impact)}
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mt-5 text-center">
                        {proj.tech}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
