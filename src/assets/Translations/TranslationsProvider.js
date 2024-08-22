import React, { createContext, useEffect, useState } from "react";
import ES from "./es-esp.json";
import LATAM from "./es-latam.json";
import CA from "./ca.json";
import EN from "./en.json";
import PT from "./pr.json";

const translations = { ES, LATAM, CA, EN, PT };

const TranslationContext = createContext();

const TranslationProvider = ({ children }) => {
  const defaultLanguage = localStorage.getItem("language") || "EN";
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
