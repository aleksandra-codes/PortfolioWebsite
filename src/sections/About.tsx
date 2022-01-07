import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";
import "./css/About.css"
import background from "../images/hero-image.jpeg";


const About = () => {
  const { t } = useTranslation();

  return (
      <div id="about" className="section hero" >
        <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div>
        <Typography variant="h3">{t("hello")}</Typography>
        <Typography variant="h5" className="sectionText">{t("developer")}</Typography>
        
      </div>
  );
};

export default About;
