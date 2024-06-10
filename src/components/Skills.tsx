import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillsData = [
    { skill: 'C#', level: 'Expert' },
    { skill: 'DotNet', level: 'Expert' },
    { skill: 'REST', level: 'Expert' },
    { skill: 'AWS', level: 'Qualified' },
    { skill: 'Entity Framework', level: 'Qualified' },
    { skill: 'Python', level: 'Expert' },
    { skill: 'MySQL', level: 'Expert' },
    { skill: 'CSS', level: 'Expert' },
    { skill: 'JavaScript', level: 'Expert' },
    { skill: 'HTML5', level: 'Expert' },
    { skill: 'PHP', level: 'Qualified' },
    { skill: 'Vue.JS', level: 'Qualified' },
  ];

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const handleExpand = (skill: string) => {
    setExpandedSkill(expandedSkill === skill ? null : skill);
  };

  return (
    <div className="bg-black min-h-screen text-white p-5 flex justify-center items-center">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-green-500 text-3xl mb-5">Skills</h2>
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
              {expandedSkill === skillData.skill ? 'Show less' : 'Show more'}
            </button>
            {expandedSkill === skillData.skill && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
