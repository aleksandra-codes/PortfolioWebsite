import { useTranslation } from "react-i18next";
import "../i18n";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";



const LanguageChange = () => {
  const { i18n } = useTranslation();
  const [curFlag, setCurFlag] = useState("en");

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    setCurFlag(event.target.value);
  };


  return (
      <FormControl>
        <Select
          id="languageSelect"
          value={curFlag}
          onChange={handleChange}
        >
          <MenuItem value={"es"}>ES</MenuItem>
          <MenuItem value={"ru"}>RU</MenuItem>
          <MenuItem value={"en"}>EN</MenuItem>
        </Select>
      </FormControl>
  );
};

export default LanguageChange;
