import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const portfolioItems = [
    {
      image: 'https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=1200%2C640',
      text: t.portfolio.items[0],
      github: 'https://github.com/psyc023/Cv-Felipe'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1920px-Angular_full_color_logo.svg.png',
      text: t.portfolio.items[1],
      github: 'https://github.com/psyc023/AngularCrud'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png',
      text: t.portfolio.items[2],
      github: 'https://github.com/psyc023/ApiNodeJs'
    },
    {
      image: 'https://dsebastien.gallerycdn.vsassets.io/extensions/dsebastien/vscode-js-ts-pack/1.4.0/1577875928556/Microsoft.VisualStudio.Services.Icons.Default',
      text: t.portfolio.items[3],
      github: 'https://github.com/psyc023/ApiNodeTS'
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h2 className="text-4xl text-center mb-10">{t.portfolio.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group bg-gray-800 p-5 rounded-lg hover:bg-accent transition-colors duration-300 flex flex-col justify-between">
            <img src={item.image} alt={item.text} className="w-full h-48 object-contain rounded-lg mb-5 mx-auto" />
            <h3 className="text-xl text-center mb-5">{item.text}</h3>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <button className="bg-accent text-black px-4 py-2 rounded-full hover:brightness-110 flex items-center justify-center">
                <FaGithub className="mr-2" /> {t.portfolio.viewOnGithub}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
