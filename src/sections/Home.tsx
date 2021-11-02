import { useTranslation } from "react-i18next";
import ThemeToggle from "../components/ThemeToggle";
import "./css/Home.css"




const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="home">
      <ThemeToggle/>
      <h1>{t("home")}</h1>
      {/* <ScrollTopArrow/> */}
    </div>
  );
};

export default Home;
