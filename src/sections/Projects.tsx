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
  name: string
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
    { src: skyline, description: "hero", name:"Skyline Ziplines Admin System"},
    { src: safebike, description: `${t("safebike_description")}`, name:"Safebike" },
    { src: rideshare, description: `${t("rideshare_description")}`, name:"Rideshare" },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="projects" className="section">
      <Typography variant="h4" className="title">
        {t("projects")}
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {imgArr.map((img: ProjectCard) => (
          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardHeader
              title={img.name}
              // subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={img.src}
              alt={img.description}
            />
            <CardContent>
              <Typography variant="body2">
                {img.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
