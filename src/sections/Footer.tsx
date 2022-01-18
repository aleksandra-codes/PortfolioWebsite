import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Footer.css";
import LinkIconButton from "../components/LinkIconButton";
import { contactButtons } from "../data/contactButtons";

const useStyles = makeStyles({
  icon: {},
});

const Footer = () => {
  const { t } = useTranslation();

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
        {t("built_by")}
      </Typography>
    </div>
  );
};

export default Footer;
