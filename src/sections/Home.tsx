import React from "react";
import { useTranslation } from "react-i18next";
import "./css/Home.css"




const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="home">
      <h1>{t("home")}</h1>
    </div>
  );
};

export default Home;
