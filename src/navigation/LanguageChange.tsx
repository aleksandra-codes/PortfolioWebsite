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



const LanguageChange = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [curFlag, setCurFlag] = React.useState("en");

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
    setCurFlag(language)
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
      return (<div>ES</div>)
    } else if (curFlag == "ru") {
      return (<div>RU</div>)
    } else {
      return (<div>EN</div>)
    }
  }

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        {showSelectedLanguage()}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage("en")}>EN</MenuItem>
        <MenuItem onClick={() => changeLanguage("es")}>ES</MenuItem>
        <MenuItem onClick={() => changeLanguage("ru")}>RU</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageChange;

{/* <Avatar alt="English" src="../images/en.png" /> */}
