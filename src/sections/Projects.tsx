import { Paper, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";
import safebike from "../images/projects_img/safebike_medium.jpg";
import rideshare from "../images/projects_img/smartmockups_jzst7d17.png";
import skyline from "../images/projects_img/skyline_ziplines2.jpeg";
import en from "../images/en.png";
import "./css/Projects.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardContent, CardHeader, CardMedia } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import React from "react";

interface ProjectCard {
  src: string;
  description: string;
  name: string;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const { t } = useTranslation();
  const imgArr: ProjectCard[] = [
    {
      src: skyline,
      description: `${t("zipline_description")}`,
      name: "Skyline Ziplines Admin System",
    },
    {
      src: safebike,
      description: `${t("safebike_description")}`,
      name: "Safebike",
    },
    {
      src: rideshare,
      description: `${t("rideshare_description")}`,
      name: "Rideshare",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="projects" className="section">
      <div className="title">
        <Typography variant="h4" className="title">
          {t("projects")}
        </Typography>
      </div>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="flex-start">
          <Grid item xs={12} md={7} className="projectImgContainer">
              <img
                src={`${imgArr[0].src}`}
                alt={imgArr[0].name}
                loading="lazy"
                className="projectImg"
              />
            </Grid>
            <Grid item xs={8} md={4}>
              <Typography>{imgArr[0].description}</Typography>
            </Grid>
            
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} direction="row"  alignItems="center" justifyContent="flex-end">
            <Grid item xs={8} md={4} order={{xs: 1, md: 0}} >
              <Typography>{imgArr[1].description}</Typography>
            </Grid>
            <Grid item xs={12} md={7} className="projectImgContainer" >
              <img
                src={`${imgArr[1].src}`}
                alt={imgArr[1].name}
                loading="lazy"
                className="projectImg"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} direction="row" alignItems="center" justifyContent="flex-start">
          <Grid item xs={12} md={7} className="projectImgContainer">
              <img
                src={`${imgArr[2].src}`}
                alt={imgArr[2].name}
                loading="lazy"
                className="projectImg"
              />
            </Grid>
            <Grid item xs={8} md={4}>
              <Typography>{imgArr[2].description}</Typography>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;

