import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "./sections/NotFound";
import "./i18n";
import SectionsPage from "./SectionsPage";
import { useState } from "react";
import "./App.scss"
import lightTheme from './themes/lightTheme' ;
import darkTheme from './themes/darkTheme';
import { Theme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";


const App = () => {
  
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }

  return (
    <ThemeProvider theme={theme === lightTheme ? lightTheme : darkTheme}>
      <CssBaseline/>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Router>
        <Route path="/" component={SectionsPage} />
        <Route render={() => NotFound} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
