import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import { useTheme } from "@mui/material";
import LinkIconButton from "../components/LinkIconButton";
import { contactButtons } from "../data/contactButtons";

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
        {contactButtons.map((button) => (
          <LinkIconButton
            link={button.link}
            icon={button.icon}
            tooltip={button.tooltip}
            fontSize="large"
          />
        ))}
      </div>
     
      <Typography variant="subtitle1" className="footerText">
        Designed and built with ❤ by Aleksandra Sorokina.
      </Typography>
    </div>
  );
};

export default Footer;
