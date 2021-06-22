// import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "./sections/NotFound";
import "./i18n";
import MainContent from "./MainContent";
import SectionsPage from "./SectionsPage";


const App = () => {


  return (
    <Router>
      {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} /> */}
      <Route path="/" component={SectionsPage} />
      <Route render={() => NotFound} />
    </Router>
  );
};

export default App;
