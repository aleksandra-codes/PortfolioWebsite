import { Typography } from "@material-ui/core";
import { Grid, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./css/Education.css";

interface EducationProps {
  school: String;
  date: String;
  name: String;
  level: String;
}

const Education = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const educationData: EducationProps[] = [
    {
      school: `${t("bcit")}`,
      date: `${t("bcit")}`,
      name: `${t("bcit")}`,
      level: `${t("bcit")}`,
    },
  ];

  return (
    <Stack spacing={1} className="section" id="education">
      <Typography variant="h4" className="title">
        {t("education")}
      </Typography>
      <Grid container spacing={2} direction="column">
        <Grid item>
          {educationData.map((school) => (
            <Grid container spacing={1} direction="column">
              <Typography variant="subtitle1">{school.school}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Education;
