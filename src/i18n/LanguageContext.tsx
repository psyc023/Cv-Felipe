import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ui, UiCopy } from './ui';
import { content } from './content';

export type Lang = 'en' | 'es' | 'ja';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: UiCopy;
  content: (typeof content)['en'];
};

const STORAGE_KEY = 'cv-lang';
const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es' || stored === 'ja') return stored;
  } catch {
    // ignore storage errors (private mode, etc.)
  }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: ui[lang],
      content: content[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
