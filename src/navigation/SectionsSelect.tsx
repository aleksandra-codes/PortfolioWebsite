import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import cadFlag from '../images/en.png';
import espFlag from '../images/es.png';
import ruFlag from '../images/ru.png';
import {
    AppBar,
    makeStyles,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
  } from "@material-ui/core";


const SectionsSelect = () => {

    const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        opacity: 0.75,
        color: "#fff",
        cursor: "pointer",
        '&:hover': {
          opacity: 1
        }
    },

    }));
  
  
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [curFlag, setCurFlag] = React.useState("en");

  const changeSection = (section: any) => {
    handleClose()
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showSelectedLanguage = () => {
    if(curFlag == "es"){
      return (<Avatar alt="Spanish" src={espFlag} />)
    } else if (curFlag == "ru") {
      return (<Avatar alt="Russian" src={ruFlag} />)
    } else {
      return (<Avatar alt="English" src={cadFlag} />)
    }
  }


  const classes = useStyles();

  return (
    <>
      {/* <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
          <MenuIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > */}
          <Typography variant="h6" className={classes.title}>
            <a
              href="#about"
              className={classes.link}
            >
              {t("aboutme")}
            </a>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <a href="#projects"
            className={classes.link}
            >{t("projects")}</a>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <a href="#contact"
            className={classes.link}
            >{t("contact")}</a>
          </Typography>
        
      {/* </Menu> */}
    </>
  );
};

export default SectionsSelect;

{/* <Avatar alt="English" src="../images/en.png" /> */}
