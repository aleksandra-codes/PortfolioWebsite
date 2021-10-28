import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";


const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className="section">
      <h1>{t("projects")}</h1>
      <ScrollTopArrow/>
    </div>
  );
};

export default Projects;
