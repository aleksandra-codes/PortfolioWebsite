import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";


interface ProjectImage {
  src: string,
  description: string
}

const Projects = () => {

  const { t } = useTranslation();
  const imgArr: ProjectImage[] = []

  return (
    <div id="projects" className="section">
      <Typography variant="h3" className="title">{t("projects")}</Typography>
      {imgArr.map((img: ProjectImage)=> <img src={img.src} alt={img.description}/>)}
    </div>
  );
};

export default Projects;
