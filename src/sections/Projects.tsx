import { Paper, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";
import safebike from "../images/projects_img/safebike_medium.jpg";
import safebike2 from "../images/projects_img/smartmockups_jzst7d17.png";
import hero from "../images/hero-image.jpeg";
import en from "../images/en.png";
import "./css/Projects.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardContent, CardHeader, CardMedia } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import React from "react";

interface ProjectImage {
  src: string;
  description: string;
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
  const imgArr: ProjectImage[] = [
    { src: safebike, description: "safe bike" },
    { src: safebike2, description: "bubbles" },
    { src: hero, description: "hero" },
    { src: en, description: "en" },
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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {imgArr.map((img: ProjectImage) => (
              <Tab label={img.description} {...a11yProps(0)} />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {imgArr.map((img: ProjectImage) => (
          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardHeader
              title={img.description}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={img.src}
              alt={img.description}
            />
            <CardContent>
              <Typography variant="body2">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default Projects;
