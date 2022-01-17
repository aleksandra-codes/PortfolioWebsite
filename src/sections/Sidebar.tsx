import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import "./css/Sidebar.css";
import LinkIconButton, { LinkIconButtonProps } from "../components/LinkIconButton";
import { contactButtons } from "../data/contactButtons";

const useStyles = makeStyles({
  icon: {},
});


const Footer = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div id="sidebar">
      {contactButtons.map((button) => (
        <LinkIconButton
        link={button.link}
        icon={button.icon}
        tooltip={button.tooltip}
        className="icon"
        fontSize="medium"
        />
      ))}
      <hr className="vl" />
    </div>
  );
};

export default Footer;
