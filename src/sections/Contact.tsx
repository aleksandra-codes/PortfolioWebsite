import { Typography } from "@material-ui/core";
import { FormControl } from "@mui/material";
import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="section">
      <Typography variant="h3">{t("getintouch")}</Typography>
    </div>
  );
};

export default Contact;
