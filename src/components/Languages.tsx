import React from 'react';

const Languages: React.FC = () => {
  return (
    <div className="bg-black flex justify-center items-center py-6 mt-11">
      <a
        className="mx-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
      >
        Spanish
      </a>
      <a
        className="mx-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
      >
        English
      </a>
      <a
        className="mx-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
      >
        日本語
      </a>
    </div>
  );
};

export default Languages;
