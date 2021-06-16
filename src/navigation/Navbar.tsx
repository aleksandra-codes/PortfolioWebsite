import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageChange from "./LanguageChange";

const Navbar = () => {
  const { t } = useTranslation();
  return (
      <Toolbar>
        <Link to="/">{t("home")}</Link>
        <Link to="/about">{t("aboutme")}</Link>
        <Link to="/projects">{t("projects")}</Link>
        <Link to="/contact">{t("contact")}</Link>
        <LanguageChange />
      </Toolbar>
  );
};

export default Navbar;
