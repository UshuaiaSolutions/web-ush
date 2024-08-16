import React, { createContext, useEffect, useState } from "react";
import es from "./es-esp.json";
import latam from "./es-latam.json";
import ca from "./ca.json";
import en from "./en.json";
import pt from "./pr.json";

const translations = { es, latam, ca, en, pt };

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const defaultLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(defaultLanguage);
  const [text, setText] = useState(translations[language]);

  useEffect(() => {
    localStorage.setItem("language", language);
    setText(translations[language]);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, text }}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext, TranslationProvider };
