import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Home.css"




const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="technologies">
      <Typography variant="h4">{t("technologies")}</Typography>

    </div>
  );
};

export default Technologies;
