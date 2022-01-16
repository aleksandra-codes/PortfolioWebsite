import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import safebike from "../images/projects_img/safebike_medium.jpg";
import rideshare from "../images/projects_img/smartmockups_jzst7d17.png";
import skyline from "../images/projects_img/skyline_ziplines2.jpeg";
import connectly from "../images/projects_img/connectly.jpeg";
import "./css/Projects.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { FiFigma } from "react-icons/fi";
import { FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { Button, Chip, Divider, Link, Paper, Stack } from "@mui/material";
import { GoLinkExternal } from "react-icons/go";

interface ProjectCard {
  src: string;
  description: string;
  name: string;
  technologies: string[];
  githubLink?: string;
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
  const projectData: ProjectCard[] = [
    {
      src: skyline,
      description: `${t("zipline_description")}`,
      name: "Skyline Ziplines Admin System",
      technologies: ["React Native", "Typescript"],
      githubLink:
        "https://github.com/SkylineZiplines/Skyline-Ziplines-Administration",
    },
    {
      description: `${t("connectly_description")}`,
      name: `${t("connectly")}`,
      src: connectly,
      githubLink: "https://github.com/youngk313/Connectly.git",
      technologies: ["Android", "Java"],
    },

    {
      src: rideshare,
      description: `${t("rideshare_description")}`,
      name: "Rideshare",
      technologies: ["Figma"],
    },
    {
      src: safebike,
      description: `${t("safebike_description")}`,
      name: "Safebike",
      technologies: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/aleksandra-codes/SafeBike",
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
        {projectData.map((project, index) => (
          <Grid item xs={12}>
            <Grid
              container
              spacing={6}
              direction="row"
              justifyContent="flex-start"
              className={classes.projectContainer}
            >
              <Grid item xs={12} md={5}>
                <img
                  src={`${project.src}`}
                  alt={project.name}
                  loading="lazy"
                  className="projectImg"
                />
              </Grid>
              <Grid item xs={12} md={7} className="textDescription">
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="subtitle1">
                  {project.description}
                </Typography>
                {project.githubLink! ? (
                  <Button
                    href={project.githubLink}
                    variant="contained"
                    color="secondary"
                  >
                    GitHub
                  </Button>
                ) : null}
                <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
                  {project.technologies.map((tech) => (
                    <Chip variant="outlined" color="primary" label={tech} />
                  ))}
                </Stack>
              </Grid>
            </Grid>
            {index != projectData.length - 1 ? (
              <Divider orientation="horizontal" flexItem />
            ) : null}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
