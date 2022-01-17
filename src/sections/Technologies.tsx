import { makeStyles, Typography } from "@material-ui/core";
import { Grid, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaSass, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {BiGitBranch} from "react-icons/bi"
import {SiTypescript, SiAndroid, SiJavascript, SiMaterialui, SiJirasoftware, SiAndroidstudio, SiVisualstudio, SiJava} from "react-icons/si"
import "./css/Technologies.css";

interface Skill {}

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
    <Stack spacing={1} className="section" id="technologies">

      <Typography variant="h6">{t("technologies")}</Typography>


      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="skillsContainer"
        spacing={3}
        xs={12} md={10}
      >
        <Grid item className="techBox" >
          <div className={`card ${classes.box}`}>
            <div className="front">
              <AiFillHtml5 />
              <Typography variant="subtitle2">HTML</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <IoLogoCss3 />
              <Typography variant="subtitle2">CSS</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <FaSass />
              <Typography variant="subtitle2">Sass</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <BiGitBranch />
              <Typography variant="subtitle2">Git</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <FaReact />
              <Typography variant="subtitle2">React</Typography>
            </div>
          </div>
        </Grid>
        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiTypescript />
              <Typography variant="subtitle2">Typescript</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiJavascript />
              <Typography variant="subtitle2">Javascript</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiMaterialui />
              <Typography variant="subtitle2">Material UI</Typography>
            </div>
          </div>
        </Grid>
        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiJirasoftware />
              <Typography variant="subtitle2">Jira</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiVisualstudio />
              <Typography variant="subtitle2">VS Code</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiAndroid />
              <Typography variant="subtitle2">Android</Typography>
            </div>
          </div>
        </Grid>

        <Grid item className="techBox">
          <div className={`card ${classes.box}`}>
            <div className="front">
              <SiJava />
              <Typography variant="subtitle2">Java</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Technologies;
