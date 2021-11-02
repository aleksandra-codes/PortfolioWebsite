import Navbar from "./navigation/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact"
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import "./SectionsPage.scss"
import { Switch, ThemeProvider } from "@material-ui/core";
import { useState } from "react";




export default function SectionsPage () {

  return (
      <div>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
        <Home/>
        </div>
  );
}
