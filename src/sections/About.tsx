import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";



const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="about" className="section">
        <h1>{t("aboutme")}</h1>
        <ScrollTopArrow/>
      </div>
    </>
  );
};

export default About;
