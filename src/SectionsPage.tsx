import About from "./sections/About";
import Projects from "./sections/Projects";
import "./SectionsPage.scss";
import { Container } from "@mui/material";
import Header from "./sections/Header";
import TopBar from "./navigation/TopBar";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
import Sidebar from "./sections/Sidebar";
import Education from "./sections/Education";

export default function SectionsPage() {
  return (
    <Container maxWidth="md">
      <TopBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
      <Sidebar />
    </Container>
  );
}
