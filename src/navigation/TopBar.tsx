import {
    AppBar,
    makeStyles,
    Slide,
    Toolbar,
    useScrollTrigger,
  } from "@material-ui/core";
  import { useTranslation } from "react-i18next";
  import LanguageChange from "./LanguageChange";
  import PropTypes from "prop-types";
  import "./css/TopBar.css"
  import { Link } from "react-router-dom";
  import logo from "../images/logo.png"


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
  
  
  
  
  interface NavbarProps {
  
  }
  
  const Navbar = (props: NavbarProps) => {
    const { t } = useTranslation();
    return (
      <div className="nav">
            <Link to="/"><img src={logo} alt="Aleksandra Sorokina Web Developer Website" className="logo" /></Link>
            <LanguageChange />
      </div>
    );
  };
  
  export default Navbar;
  
  
  