import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";
import "./css/About.css";
import background from "../images/hero-image.jpeg";
import { Grid, Icon, Paper } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import AndroidIcon from '@mui/icons-material/Android';
import JavascriptIcon from '@mui/icons-material/Javascript';

const About = () => {
  const { t } = useTranslation();


  return (
    <Paper elevation={0}>
      <div id="about" className="section hero">

        <Typography variant="h4" className="title">
          {t("aboutme")}
        </Typography>
        <Grid container  spacing={2}>
          <Grid item >
            <GitHubIcon />
            <AndroidIcon />
            <JavascriptIcon />
          </Grid>
        </Grid>

        {/* <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div> */}

        <Typography variant="h6">{t("aboutTextOne")}</Typography>
        <Typography variant="h6">{t("aboutTextTwo")}</Typography>
        <Typography variant="h6">{t("aboutTextThree")}</Typography>
      </div>
    </Paper>
  );
};

export default About;
