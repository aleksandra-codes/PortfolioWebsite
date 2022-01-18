import { Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./css/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="section">
      <Stack direction="column" spacing={2}>
        <Typography variant="h5">{t("aboutme")}</Typography>
        <Typography variant="h6">{t("aboutTextOne")}</Typography>
        <Typography variant="h6">{t("aboutTextTwo")}</Typography>
        <Typography variant="h6">{t("aboutTextThree")}</Typography>
      </Stack>
    </div>
  );
};

export default About;
