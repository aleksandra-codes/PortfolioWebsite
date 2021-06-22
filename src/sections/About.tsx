import { useTranslation } from "react-i18next";



const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="about" className="section">
        <h1>{t("aboutme")}</h1>
      </div>
    </>
  );
};

export default About;