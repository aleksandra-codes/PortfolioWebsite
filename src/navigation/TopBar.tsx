import "./css/TopBar.css";
import logo from "../images/logo.png";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
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
      <img
        src={logo}
        alt="Aleksandra Sorokina Web Developer Website"
        className="logo"
      />
      {darkMode ? (
        <IconButton onClick={toggleTheme}>
          <LightModeIcon className="modeSwitchLight" fontSize="medium" />
        </IconButton>
      ) : (
        <IconButton onClick={toggleTheme}>
          <DarkModeIcon className="modeSwitchDark" fontSize="medium" />
        </IconButton>
      )}
      {/* <LanguageChange /> */}
    </div>
  );
};

export default Navbar;
