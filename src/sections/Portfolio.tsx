import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./css/Portfolio.css";

interface ProjectCard {
  // src: string;
  description: string;
  name: string;
}

const Portfolio = () => {
  const { t } = useTranslation();
  const imgArr: ProjectCard[] = [
    {
      //   src: skyline,
      description: `${t("zipline_description")}`,
      name: "Skyline Ziplines Admin System",
    },
    {
      //   src: safebike,
      description: `${t("safebike_description")}`,
      name: "Safebike",
    },
    {
      //   src: rideshare,
      description: `${t("rideshare_description")}`,
      name: "Rideshare",
    },
    {
      //   src: rideshare,
      description: `${t("connectly")}`,
      name: "Connectly",
    },
  ];
  return (
    <div id="contact" className="section">
      <div className="title">
        <Typography variant="h4">{t("portfolio")}</Typography>
      </div>

      <Grid container className="projectWrap">
        <Grid item className="projectItem">
          <div className="projectDescription">
            <Typography variant="h6">{imgArr[0].name}</Typography>
            <Typography variant="subtitle1">{imgArr[0].description}</Typography>
          </div>
        </Grid>
        <Grid item className="projectItem">
          <div className="projectDescription">
            <Typography variant="h6">{imgArr[0].name}</Typography>
            <Typography>{imgArr[1].description}</Typography>
          </div>
        </Grid>
        <Grid item className="projectItem">
          <div className="projectDescription">
            <Typography variant="h6">{imgArr[0].name}</Typography>
            <Typography>{imgArr[2].description}</Typography>
          </div>
        </Grid>
        <Grid item className="projectItem">
          <div className="projectDescription">
            <Typography variant="h6">{imgArr[0].name}</Typography>
            <Typography>{imgArr[3].description}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
