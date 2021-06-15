import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
