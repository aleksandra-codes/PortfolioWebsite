import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import "./css/Technologies.css";

const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className="section" id="technologies">
      <Typography variant="h4">{t("skills")}</Typography>
      <Grid container justifyContent="center" alignItems="center" className="skillsContainer">
        <Grid item>
          <AiFillHtml5 />
        </Grid>
        <Grid item>
          <IoLogoCss3 />
        </Grid>
        <Grid item>
          <FaSass />
        </Grid>
        <Grid item>
          <AiFillGithub />
        </Grid>
      </Grid>
    </div>
  );
};

export default Technologies;
