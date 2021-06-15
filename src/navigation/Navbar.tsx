import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageChange from "./LanguageChange";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <NavLink className="navLink" activeClassName="active" to="/">
        {t("home")}
      </NavLink>
      <NavLink className="navLink" activeClassName="active" to="/about">
        {t("aboutme")}
      </NavLink>
      <NavLink className="navLink" activeClassName="active" to="/projects">
        {t("projects")}
      </NavLink>
      <NavLink className="navLink" activeClassName="active" to="/contact">
        {t("contact")}
      </NavLink>
      <div>
        {" "}
        <LanguageChange />
      </div>
    </nav>
  );
};

export default Navbar;
