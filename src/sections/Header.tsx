import { makeStyles, Typography } from "@material-ui/core";
import { Button, Chip, Link, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./css/Header.css";

const useStyles = makeStyles({
  name: {
    fontFamily: "'Tenor Sans', sans-serif",
    textAlign: "center",
    ["@media (max-width:800px)"]: {
      fontSize: "50px",
    },
  },
});

const Header = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className="section" id="header">
      <Stack spacing={3} alignItems="center">
        <Typography variant="h2" className={"nameHeader " + `${classes.name}`}>
          {t("aleksandra")}
          <span className="accent"> {t("sorokina")}</span>
        </Typography>
        <Typography variant="h5" className="subHeader">
          {t("developer")}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="#projects"
            rel="noopener noreferrer"
            // target="_blank"
            underline="none"
          >
            <Chip
              variant="outlined"
              label="Projects"
              className="clickableChip"
              color="primary"
            />
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            underline="none"
          >
            <Chip
              variant="outlined"
              label="Resume"
              className="clickableChip"
              color="primary"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aleksandra-sorokina/"
            rel="noopener noreferrer"
            target="_blank"
            underline="none"
          >
            <Chip
              variant="outlined"
              label="LinedIn"
              className="clickableChip"
              color="primary"
            />
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
