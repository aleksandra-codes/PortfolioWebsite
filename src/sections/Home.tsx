import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./css/Home.css"




const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="home">
      <Typography variant="h3">{t("home")}</Typography>
    </div>
  );
};

export default Home;
