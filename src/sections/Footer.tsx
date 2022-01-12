import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "@mui/material";

const useStyles = makeStyles({
  icon: {},
});

const Footer = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className="section" id="footer">
      <div>
        <Link href="https://www.linkedin.com/in/aleksandra-sorokina/">
          <LinkedInIcon fontSize="large" className="icon" />
        </Link>
        <Link href="https://github.com/aleksandra-codes">
          <GitHubIcon fontSize="large" className="icon" />
        </Link>

        <Link href="#">
          <MailIcon fontSize="large" className="icon" />
        </Link>
      </div>
      <div> Designed and build with ❤ by Aleksandra Sorokina.</div>
    </div>
  );
};

export default Footer;
