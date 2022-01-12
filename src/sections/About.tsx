import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/About.css";
import { Box, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AndroidIcon from "@mui/icons-material/Android";
import JavascriptIcon from "@mui/icons-material/Javascript";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="section hero">
      <div className="title">
        <Typography variant="h4">{t("aboutme")}</Typography>
      </div>
      {/* <Grid container spacing={2}>
        <Grid item>
          <GitHubIcon />
          <AndroidIcon />
          <JavascriptIcon />
        </Grid>
      </Grid> */}

      <Typography variant="h6">{t("aboutTextOne")}</Typography>
      <Typography variant="h6">{t("aboutTextTwo")}</Typography>
      <Typography variant="h6">{t("aboutTextThree")}</Typography>
    </div>
  );
};

export default About;
