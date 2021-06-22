import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("notfound")}</h1>
    </>
  );
};

export default NotFound;