import { useTranslation } from "react-i18next";


const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className="section">
      <h1>{t("projects")}</h1>
    </div>
  );
};

export default Projects;
