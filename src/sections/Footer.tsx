import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useTheme } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';


const useStyles = makeStyles({
  icon: {},
});

const Footer = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="section" id="footer">
      <div>
        <Link href="#" rel="noopener noreferrer" target="_blank">
          <ArticleIcon className="icon" fontSize="large" />
        </Link>
        <Link href="https://www.linkedin.com/in/aleksandra-sorokina/">
          <LinkedInIcon fontSize="large" className="icon" />
        </Link>
        <Link href="https://github.com/aleksandra-codes">
          <GitHubIcon fontSize="large" className="icon" />
        </Link>

        <Link href="mailto:asorokina@my.bcit.ca?">
          <MailIcon fontSize="large" className="icon" />
        </Link>
      </div>
      <Typography variant="subtitle1" className="footerText"> Build with ❤ by Aleksandra Sorokina.</Typography>
    </div>
  );
};

export default Footer;
