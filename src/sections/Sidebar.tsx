import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useTheme } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import "./css/Sidebar.css";

const useStyles = makeStyles({
  icon: {},
});

const Footer = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div id="sidebar">
      <Link href="#" rel="noopener noreferrer" target="_blank">
        <ArticleIcon fontSize="medium" className="icon" />
      </Link>
      <Link href="https://www.linkedin.com/in/aleksandra-sorokina/">
        <LinkedInIcon fontSize="medium" className="icon" />
      </Link>
      <Link href="https://github.com/aleksandra-codes">
        <GitHubIcon fontSize="medium" className="icon" />
      </Link>

      <Link href="mailto:asorokina@my.bcit.ca?">
        <MailIcon fontSize="medium" className="icon" />
      </Link>
      <hr className="vl" />
    </div>
  );
};

export default Footer;
