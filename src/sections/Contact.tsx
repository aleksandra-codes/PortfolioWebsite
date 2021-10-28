import { useTranslation } from "react-i18next";
import ScrollTopArrow from "../navigation/ScrollTopArrow";


const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="section">
      <h1>{t("contact")}</h1>
      <ScrollTopArrow/>
    </div>
  );
};

export default Contact;
