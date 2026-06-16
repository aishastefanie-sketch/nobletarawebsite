import React, { createContext, useContext, useState, ReactNode } from 'react';
import { th } from '../locales/th';

type LanguageContextType = {
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'en' | 'th'>('en');

  const toggleLang = () => {
    setLang((prev) => prev === 'en' ? 'th' : 'en');
  };

  const t = (key: string) => {
    if (lang === 'th' && th[key]) {
      return th[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
