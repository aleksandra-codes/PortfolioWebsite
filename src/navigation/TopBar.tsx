import { makeStyles, Slide, useScrollTrigger } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LanguageChange from "./LanguageChange";
import PropTypes from "prop-types";
import "./css/TopBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { IconButton, Stack} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
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
            <DarkModeIcon fontSize="inherit" className="modeSwitchDark"/>
          </IconButton>
        )}
      <Stack direction="row" alignItems="center" spacing={1}>
        <LanguageChange />
      </Stack>
    </div>
  );
};

export default Navbar;
