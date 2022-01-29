import { Typography } from "@material-ui/core";
import { Grid, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./css/Education.css"
const Education = () => {
  const { t } = useTranslation();

  const theme = useTheme();

  //   const useStyles = makeStyles({
  //     box: {
  //       backgroundColor:
  //         theme.palette.mode === "dark"
  //           ? theme.palette.primary.main
  //           : theme.palette.secondary.main,
  //       color:
  //         theme.palette.mode === "dark"
  //           ? theme.palette.text.primary
  //           : theme.palette.secondary.contrastText,
  //       "&::before": {
  //         background:
  //           theme.palette.mode === "dark"
  //             ? `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})}`
  //             : `linear-gradient(to right, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})}`,
  //       },
  //     },
  //   });

  //   const classes = useStyles();

  return (
    <Stack spacing={1} className="section" id="education">
      <Typography variant="h4" className="title">
        {t("education")}
      </Typography>
      <Grid container spacing={2} direction="column">
       
      </Grid>
    </Stack>
  );
};

export default Education;
