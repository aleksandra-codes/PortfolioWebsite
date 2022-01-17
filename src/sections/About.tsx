import { Typography } from "@material-ui/core";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import "./css/About.css";
import me from "../images/portrait1.jpeg";
import luna from "../images/luna.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="section hero">
      <Stack direction="column" spacing={2}>
        <Typography variant="h5">
          Hi There! I'm Aleksandra. A little bit about me..
        </Typography>
        <Typography variant="h6">{t("aboutTextOne")}</Typography>
        <Typography variant="h6">{t("aboutTextTwo")}</Typography>
        <Typography variant="h6">{t("aboutTextThree")}</Typography>
        {/* <Grid
          container
          justifyContent="center"
          flexDirection={{sm: "column", md:"row"}}
          spacing={2}
          alignItems="center"
        >
          <Grid item sm={12} md={4} className="photoGrid">
            <img
              src={me}
              alt="Aleksandra Sorokina"
              loading="lazy"
              className="photo" 
            />
            <Typography variant="body2">
              Besides coding I enjoy hiking and travelling.
            </Typography>
          </Grid>
          <Grid item sm={6} md={4} className="photoGrid">
            <img
              src={luna}
              alt="Aleksandra Sorokina"
              loading="lazy"
              className="photo"
            />
            <Typography variant="body2">
              This is Luna. She enjoys watching me code and always keeps me
              company.
            </Typography>
          </Grid>
        </Grid> */}
      </Stack>
    </div>
  );
};

export default About;
