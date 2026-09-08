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
    <div className="bg-black flex flex-col items-center py-6 mt-11">
      <div className="flex justify-center items-center">
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

      <button
        type="button"
        className="mt-6 border border-white/40 text-white px-5 py-2 rounded-full hover:border-accent hover:text-accent bg-transparent"
        onClick={() => {
          window.location.hash = 'simple';
        }}
      >
        {t.simpleView.open}
      </button>
    </div>
  );
};

export default Languages;
