import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Card, CardContent, Grid, Link, Tooltip } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import "./css/Sidebar.css";

const useStyles = makeStyles({
  icon: {},
});

const Skills = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div id="skills">
      <Grid container>
        <Grid item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography>Front End</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
