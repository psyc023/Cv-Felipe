import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Languages: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  const buttonClass = (isActive: boolean) =>
    `font-bold py-2 px-4 rounded-full transition-colors ${
      isActive
        ? 'bg-accent text-black ring-2 ring-white brightness-110'
        : 'bg-accent hover:brightness-110 text-white'
    }`;

  return (
    <div className="bg-black flex justify-center items-center py-6 mt-11">
      <div className="relative group mx-4 mt-2">
        <button
          type="button"
          className={buttonClass(lang === 'es')}
          onClick={() => setLang('es')}
          aria-pressed={lang === 'es'}
        >
          {t.languages.spanish}
        </button>
        <span className="absolute top-full mt-2 hidden group-hover:block bg-accent text-white text-sm py-1 px-2 rounded whitespace-nowrap">
          {t.languages.switchToSpanish}
        </span>
      </div>

      <div className="relative group mx-4 mt-2">
        <button
          type="button"
          className={buttonClass(lang === 'en')}
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
        >
          {t.languages.english}
        </button>
        <span className="absolute top-full mt-2 hidden group-hover:block bg-accent text-white text-sm py-1 px-2 rounded whitespace-nowrap">
          {t.languages.switchToEnglish}
        </span>
      </div>

      <div className="relative group mx-4 mt-2">
        <button
          type="button"
          className={buttonClass(lang === 'ja')}
          onClick={() => setLang('ja')}
          aria-pressed={lang === 'ja'}
        >
          {t.languages.japanese}
        </button>
        <span className="absolute top-full mt-2 hidden group-hover:block bg-accent text-white text-sm py-1 px-2 rounded whitespace-nowrap">
          {t.languages.switchToJapanese}
        </span>
      </div>
    </div>
  );
};

export default Languages;
