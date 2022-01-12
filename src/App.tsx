import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "./sections/NotFound";
import "./i18n";
import SectionsPage from "./SectionsPage";
import { useState } from "react";
import "./App.scss"
import lightTheme from './themes/lightTheme' ;
import darkTheme from './themes/darkTheme';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ModeContext } from "./context/ModeContext";



const App = () => {
  
  const [darkMode, setMode] = useState(false);
  return (
    <ModeContext.Provider value={{darkMode, setMode}}>
    <ThemeProvider theme={darkMode === false ? lightTheme : darkTheme}>
      <CssBaseline/>
      <Router>
        <Route path="/" component={SectionsPage} />
        <Route render={() => NotFound} />
      </Router>
    </ThemeProvider>
    </ModeContext.Provider>
  );
};

export default App;
