import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import safebike from "../images/projects_img/safebike_medium.jpg";
import rideshare from "../images/projects_img/smartmockups_jzst7d17.png";
import skyline from "../images/projects_img/skyline_ziplines2.jpeg";
import "./css/Projects.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { FiFigma } from "react-icons/fi";
import { FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { Link, Paper } from "@mui/material";
import { GoLinkExternal } from "react-icons/go";

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

const useStyles = makeStyles({
  projectContainer: {
    ["@media (max-width:900px)"]: {
      justifyContent: "center",
    },
  },
});

const Projects = () => {
  const { t } = useTranslation();
  const classes = useStyles();
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
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            className={classes.projectContainer}
          >
            <Grid item xs={12} md={6} className="projectImgContainer">
              <img
                src={`${imgArr[0].src}`}
                alt={imgArr[0].name}
                loading="lazy"
                className="projectImg"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Grid container>
                <Grid item>
                  <Typography>{imgArr[0].description}</Typography>
                </Grid>
                <Grid item>
                  <FaReact />
                </Grid>
                <Grid item>
                  <Link href="https://github.com/SkylineZiplines/Skyline-Ziplines-Administration">
                    <GoLinkExternal />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            className={classes.projectContainer}
          >
            <Grid item xs={12} sm={8} md={4} order={{ xs: 1, md: 0 }}>
              <Grid container>
                <Grid item>
                  <Typography>{imgArr[1].description}</Typography>
                </Grid>
                <Grid item>
                  <AiFillHtml5 />
                  <IoLogoCss3 />
                  <FaSass />
                  <AiFillGithub />
                </Grid>
                <Link href="https://github.com/aleksandra-codes/SafeBike">
                    <GoLinkExternal />
                  </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} className="projectImgContainer">
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
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            className={classes.projectContainer}
          >
            <Grid item xs={12} md={6} className="projectImgContainer">
              <img
                src={`${imgArr[2].src}`}
                alt={imgArr[2].name}
                loading="lazy"
                className="projectImg"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <Grid container>
                <Grid item>
                  <Typography>{imgArr[2].description}</Typography>
                </Grid>
                <Grid item>
                  <FiFigma />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
