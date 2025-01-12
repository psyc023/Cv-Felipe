import React from 'react';

const Languages: React.FC = () => {
  return (
    <div className="bg-black flex justify-center items-center py-6 mt-11">
      <div className="relative group mx-4 mt-2">
        <a
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
        >
          Spanish
        </a>
        <span className="absolute top-full mt-2 hidden group-hover:block bg-green-700 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
           Cambiar a Español
        </span>
      </div>

      <div className="relative group mx-4 mt-2">
        <a
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
        >
          English
        </a>
        <span className="absolute top-full mt-2 hidden group-hover:block bg-green-700 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
          Switch to English
        </span>
      </div>

      <div className="relative group mx-4 mt-2">
        <a
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
        >
          日本語
        </a>
        <span className="absolute top-full mt-2 hidden group-hover:block bg-green-700 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
          日本語に変更
        </span>
      </div>
    </div>
  );
};


export default Languages;
