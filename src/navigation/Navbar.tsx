import {
  AppBar,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageChange from "./LanguageChange";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props: any) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">{t("home")}</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/about">{t("aboutme")}</Link>
          </Typography>
          <Link to="/projects">{t("projects")}</Link>
          <Link to="/contact">{t("contact")}</Link>
          <LanguageChange />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
