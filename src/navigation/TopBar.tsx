import { makeStyles, Slide, useScrollTrigger } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LanguageChange from "./LanguageChange";
import PropTypes from "prop-types";
import "./css/TopBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { IconButton, Stack } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";


const Navbar = () => {
  const { t } = useTranslation();

  const { darkMode, setMode } = useContext(ModeContext);

  const toggleTheme = () => {
    if (darkMode === false) {
      setMode(true);
    } else {
      setMode(false);
    }
  };

  return (
    <div className="nav">
      <Link to="/" className="logoLink">
        <img
          src={logo}
          alt="Aleksandra Sorokina Web Developer Website"
          className="logo"
        />
      </Link>
      {darkMode ? (
        <IconButton onClick={toggleTheme} size="large">
          <LightModeIcon className="modeSwitchLight" />
        </IconButton>
      ) : (
        <IconButton onClick={toggleTheme}>
          <DarkModeIcon fontSize="inherit" className="modeSwitchDark" />
        </IconButton>
      )}
      <LanguageChange />
    </div>
  );
};

export default Navbar;
