import { makeStyles, Typography } from "@material-ui/core";
import { Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import "./css/Technologies.css";

interface Skill {
  icon: string;
}

const Technologies = () => {
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

  const skills = [];

  return (
    <div className="section" id="technologies">
      <div className="title">
      <Typography variant="h4">{t("skills")}</Typography>
      </div>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="skillsContainer"
        spacing={2}
      >
        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <AiFillHtml5 />
            </div>
          </div>
        </Grid>
        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <IoLogoCss3 />
            </div>
          </div>
        </Grid>
        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <FaSass />
            </div>
          </div>
        </Grid>
        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <AiFillGithub />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Technologies;
