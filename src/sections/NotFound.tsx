import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h3">{t("notfound")}</Typography>
    </>
  );
};

export default NotFound;
