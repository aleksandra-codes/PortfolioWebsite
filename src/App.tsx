import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import NotFound from "./sections/NotFound";
import Navbar from "./navigation/Navbar";
import "./i18n";

const renderSections = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} /> */}
      <Route path="/" render={renderSections} />
      <Route render={() => NotFound} />
    </Router>
  );
};

export default App;
