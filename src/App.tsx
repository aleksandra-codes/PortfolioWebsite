// import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "./sections/NotFound";
import "./i18n";
import SectionsPage from "./SectionsPage";
import lightTheme from './themes/lightTheme'
import { useContext, useState } from "react";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "@material-ui/styles";
import darkTheme from "./themes/darkTheme";

const App = () => {
  const {isLightTheme} = useContext(ThemeContext);
  
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Router>
        <Route path="/" component={SectionsPage} />
        <Route render={() => NotFound} />
      </Router>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};

export default App;
