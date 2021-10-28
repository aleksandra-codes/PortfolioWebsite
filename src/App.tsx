// import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "./sections/NotFound";
import "./i18n";
import SectionsPage from "./SectionsPage";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Navbar from "./navigation/Navbar";
import Home from "./sections/Home";


const App = () => {


  return (
    <Router>
      {/* <Route path="/" component={Navbar} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route render={() => NotFound} />  */}
      <Route path="/" component={SectionsPage} />
      <Route render={() => NotFound} />
    </Router>
  );
};

export default App;
