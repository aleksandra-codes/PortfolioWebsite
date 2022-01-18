import { makeStyles, Typography } from "@material-ui/core";
import { Grid, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { skills } from "../data/skillsIcons";
import "./css/Skills.css";

const Skills = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  const useStyles = makeStyles({
    box: {
      backgroundColor:
        theme.palette.mode == "dark"
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
      color:
        theme.palette.mode == "dark"
          ? theme.palette.text.primary
          : theme.palette.secondary.contrastText,
      "&::before": {
        background:
          theme.palette.mode == "dark"
            ? `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})}`
            : `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})}`,
      },
    },
  });

  const classes = useStyles();

  return (
    <Stack spacing={1} className="section" id="skills">
      <Typography variant="h6">{t("technologies")}</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="skillsContainer"
        spacing={3}
        xs={12}
        md={12}
      >
        {skills.map((skill) => (
          <Grid item className="techBox">
            <div className={`card ${classes.box}`}>
              <div className="front">
                <skill.icon />
                <Typography variant="subtitle2">{skill.name}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Skills;
