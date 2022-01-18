import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import safebike from "../images/projects_img/safebike_medium.jpg";
import rideshare from "../images/projects_img/rideshare_app.jpeg";
import skyline from "../images/projects_img/skyline_ziplines2.jpeg";
import connectly from "../images/projects_img/connectly_app.jpeg";
import "./css/Projects.css";
import Grid from "@mui/material/Grid";
import { Chip, Divider, Stack } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { ProjectCard } from "../types/types";



const useStyles = makeStyles({
  projectContainer: {
    ["@media (max-width:900px)"]: {
      justifyContent: "center",
    },
  },

});

const Projects = () => {
  const { t } = useTranslation();
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

  const classes = useStyles();

  return (
    <Stack spacing={2} id="projects" className="section">
      <Typography variant="h4" className="title">
        {t("projects")}
      </Typography>
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
              <Grid item xs={12} md={5} textAlign="center">
                <img
                  src={`${project.src}`}
                  alt={project.name}
                  loading="lazy"
                  className="projectImg"
                />
              </Grid>
              <Grid item xs={10} md={7} className="textDescription">
                <Stack spacing={2}>
                  <Typography variant="h6">{project.name}</Typography>
                  <Typography variant="subtitle1">
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }}>
                    {project.technologies.map((tech) => (
                      <Chip variant="outlined" color="secondary" label={tech} />
                    ))}
                  </Stack>
                  <div>
                    {project.githubLink! ? (
                      <Chip
                        href={project.githubLink}
                        component="a"
                        variant="outlined"
                        color="primary"
                        label={"GitHub"}
                        className="githubLink"
                        icon={<LogoutIcon fontSize="small" />}
                      />
                    ) : null}
                  </div>
                </Stack>
              </Grid>
            </Grid>
            {index != projectData.length - 1 ? (
              <Divider
                orientation="horizontal"
                flexItem
                variant="middle"
                className="projectDivider"
              />
            ) : null}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Projects;
