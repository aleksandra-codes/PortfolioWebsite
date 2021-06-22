import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="section">
      <h1>{t("contact")}</h1>
    </div>
  );
};

export default Contact;
