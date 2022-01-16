import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="section hero">
      <div className="title">
        {/* <Typography variant="h4">{t("aboutme")}</Typography> */}
        <Typography variant="h4">Hi There! Nice to meet you!</Typography>
      </div>
      <Typography variant="h6">{t("aboutTextOne")}</Typography>
      <Typography variant="h6">{t("aboutTextTwo")}</Typography>
      <Typography variant="h6">{t("aboutTextThree")}</Typography>
    </div>
  );
};

export default About;
