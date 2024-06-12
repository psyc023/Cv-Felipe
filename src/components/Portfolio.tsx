import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: 'path_to_image1', // Reemplaza con la ruta real de la imagen
      text: 'Project 1',
      github: 'https://github.com/user/project1'
    },
    {
      image: 'path_to_image2',
      text: 'Project 2',
      github: 'https://github.com/user/project2'
    },
    {
      image: 'path_to_image3',
      text: 'Project 3',
      github: 'https://github.com/user/project3'
    },
    {
      image: 'path_to_image4',
      text: 'Project 4',
      github: 'https://github.com/user/project4'
    },
    {
      image: 'path_to_image5',
      text: 'Project 5',
      github: 'https://github.com/user/project5'
    },
    {
      image: 'path_to_image6',
      text: 'Project 6',
      github: 'https://github.com/user/project6'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h2 className="text-4xl text-center mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group bg-gray-800 p-5 rounded-lg hover:bg-green-500 transition-colors duration-300">
            <img src={item.image} alt={item.text} className="w-full h-48 object-cover rounded-lg mb-5" />
            <h3 className="text-xl mb-5">{item.text}</h3>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 flex items-center justify-center">
                <FaGithub className="mr-2" /> View on GitHub
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
