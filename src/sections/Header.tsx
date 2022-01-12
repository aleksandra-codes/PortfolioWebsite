import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Header.css";


const useStyles = makeStyles({
  name: {
    fontFamily: "'Tenor Sans', sans-serif",
    textAlign: "center",

  }

});

const Header = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className="section" id="header">
      <Typography variant="h2" className={"nameHeader " + `${classes.name}`}>
        {t("aleksandra")}
        <span className="accent"> {t("sorokina")}</span>
      </Typography>
      <Typography variant="h5" className="subHeader">
        {t("developer")}
      </Typography>
    </div>
  );
};

export default Header;
