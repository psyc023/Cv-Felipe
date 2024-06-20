import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillsData = [
    {
      skill: 'C#',
      level: 'Expert',
      details: [
        { label: 'Syntax and Fundamentals', percentage: 90 },
        { label: 'API Development and Consumption', percentage: 90 },
        { label: '4 Years of Experience', percentage: 100 },
        { label: 'Testing and Debugging', percentage: 100 }
      ]
    },
    {
      skill: 'DotNet',
      level: 'Expert',
      details: [
        { label: 'MVC Framework', percentage: 85 },
        { label: 'LINQ', percentage: 80 },
        { label: 'RESTful API', percentage: 85 },
        { label: 'Azure Integrations', percentage: 75 }
      ]
    },
    {
      skill: 'REST',
      level: 'Expert',
      details: [
        { label: 'API Design', percentage: 90 },
        { label: 'API Implementation', percentage: 85 },
        { label: 'API Security', percentage: 80 },
        { label: 'Performance Testing', percentage: 85 }
      ]
    },
    {
      skill: 'AWS',
      level: 'Qualified',
      details: [
        { label: 'EC2', percentage: 70 },
        { label: 'RDS', percentage: 75 },
        { label: 'Lambda', percentage: 65 },
        { label: 'CloudWatch', percentage: 60 }
      ]
    },
    {
      skill: 'Entity Framework',
      level: 'Qualified',
      details: [
        { label: 'Model First Approach', percentage: 80 },
        { label: 'Code First Approach', percentage: 85 },
        { label: 'Database Migrations', percentage: 75 },
        { label: 'Performance Optimization', percentage: 70 }
      ]
    },
    {
      skill: 'Python',
      level: 'Expert',
      details: [
        { label: 'Syntax and Basics', percentage: 95 },
        { label: 'Web Development', percentage: 90 },
        { label: 'Data Analysis', percentage: 85 },
        { label: 'Machine Learning', percentage: 80 }
      ]
    },
    {
      skill: 'MySQL',
      level: 'Expert',
      details: [
        { label: 'Database Design', percentage: 90 },
        { label: 'Query Optimization', percentage: 85 },
        { label: 'Stored Procedures', percentage: 80 },
        { label: 'Replication Setup', percentage: 75 }
      ]
    },
    {
      skill: 'CSS',
      level: 'Expert',
      details: [
        { label: 'Flexbox Layout', percentage: 85 },
        { label: 'Grid Layout', percentage: 80 },
        { label: 'Responsive Design', percentage: 85 },
        { label: 'Animation and Transitions', percentage: 75 }
      ]
    },
    {
      skill: 'JavaScript',
      level: 'Expert',
      details: [
        { label: 'ES6+', percentage: 90 },
        { label: 'Functional Programming', percentage: 85 },
        { label: 'Async/Await', percentage: 85 },
        { label: 'Frontend Frameworks', percentage: 80 }
      ]
    },
    {
      skill: 'HTML5',
      level: 'Expert',
      details: [
        { label: 'Semantic HTML', percentage: 85 },
        { label: 'Accessibility', percentage: 80 },
        { label: 'Canvas and SVG', percentage: 75 },
        { label: 'Web APIs', percentage: 80 }
      ]
    },
    {
      skill: 'PHP',
      level: 'Qualified',
      details: [
        { label: 'OOP in PHP', percentage: 75 },
        { label: 'Database Integration', percentage: 70 },
        { label: 'MVC Frameworks', percentage: 65 },
        { label: 'RESTful APIs', percentage: 70 }
      ]
    },
    {
      skill: 'Vue.JS',
      level: 'Qualified',
      details: [
        { label: 'Vue Components', percentage: 75 },
        { label: 'State Management', percentage: 70 },
        { label: 'Routing', percentage: 65 },
        { label: 'Vue CLI', percentage: 70 }
      ]
    },
    {
      skill: 'React',
      level: 'Expert',
      details: [
        { label: 'Component Lifecycle', percentage: 90 },
        { label: 'Redux', percentage: 85 },
        { label: 'Hooks', percentage: 85 },
        { label: 'Server-side Rendering', percentage: 80 }
      ]
    },
    {
      skill: 'Angular',
      level: 'Qualified',
      details: [
        { label: 'Component Architecture', percentage: 75 },
        { label: 'Directives', percentage: 70 },
        { label: 'RxJS', percentage: 65 },
        { label: 'Angular CLI', percentage: 70 }
      ]
    },
    {
      skill: 'C++',
      level: 'Qualified',
      details: [
        { label: 'STL', percentage: 70 },
        { label: 'Object-Oriented Programming', percentage: 65 },
        { label: 'Memory Management', percentage: 60 },
        { label: 'Multi-threading', percentage: 65 }
      ]
    },
    {
      skill: 'Tailwind',
      level: 'Qualified',
      details: [
        { label: 'Utility-first CSS', percentage: 80 },
        { label: 'Responsive Design', percentage: 75 },
        { label: 'Customization', percentage: 70 },
        { label: 'Optimized for Speed', percentage: 75 }
      ]
    },
    {
      skill: 'NodeJS',
      level: 'Qualified',
      details: [
        { label: 'Express.js', percentage: 75 },
        { label: 'RESTful APIs with Node', percentage: 70 },
        { label: 'Asynchronous Programming', percentage: 65 },
        { label: 'Package Management (npm/yarn)', percentage: 70 }
      ]
    }
  ];

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const handleExpand = (skill: string) => {
    setExpandedSkill(expandedSkill === skill ? null : skill);
  };

  return (
    <div className="bg-black min-h-screen text-white p-5 flex justify-center items-center p-10">
      <div className="max-w-2xl w-full text-center grid grid-cols-1 lg:grid-cols-2 gap-8">
        <h2 className="text-green-500 text-3xl mb-5 lg:col-span-2">Skills</h2>
        {skillsData.map((skillData, index) => (
          <div key={index} className="mb-5">
            <p className="text-green-500 mb-1">{skillData.skill}</p>
            <motion.div
              className="bg-green-500 h-5 rounded-full relative hover:bg-orange-500"
              initial={{ width: 0 }}
              animate={{ width: skillData.level === 'Expert' ? '90%' : '80%' }}
              transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            >
              <span className="absolute inset-0 text-black text-center leading-5">{skillData.level}</span>
            </motion.div>
            <button
              onClick={() => handleExpand(skillData.skill)}
              className="text-orange-500 bg-transparent border-none cursor-pointer mt-2 block mx-auto"
            >
              {expandedSkill === skillData.skill ? (
                <FaAngleDown className="text-orange-500 transform rotate-180" />
              ) : (
                <FaAngleDown className="text-orange-500" />
              )}
            </button>
            {expandedSkill === skillData.skill && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {skillData.details.map((detail, idx) => (
                  <div key={idx}>
                    <p>{detail.label}: {detail.percentage}%</p>
                    <motion.div
                      className="bg-orange-500 h-5 rounded-full relative hover:bg-yellow-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${detail.percentage}%` }}
                      transition={{ duration: 1, type: 'spring', stiffness: 80 }}
                    >
                      <span className="absolute inset-0 text-black text-center leading-5">{detail.percentage}%</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
