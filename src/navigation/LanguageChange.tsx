import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const LanguageChange = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("es")}>ES</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
    </>
  );
};

export default LanguageChange;
