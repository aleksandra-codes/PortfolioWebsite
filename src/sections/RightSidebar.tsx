import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useTheme } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import "./css/RightSidebar.css";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const useStyles = makeStyles({
    emailText: {
      color: theme.palette.primary.main,
    },
  });
  const classes = useStyles();

  return (
    <div id="rightSidebar">
      <div className="email">
        <Link href="mailto:asorokina@my.bcit.ca?" style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle1" className={classes.emailText}>
            aleksandra.codes@gmail.com
          </Typography>
        </Link>
      </div>
      <hr className="vl" />
    </div>
  );
};

export default Footer;
