import About from "./sections/About";
import Projects from "./sections/Projects";
import "./SectionsPage.scss";
import { Container } from "@mui/material";
import Header from "./sections/Header";
import TopBar from "./navigation/TopBar";
import Footer from "./sections/Footer";
import Technologies from "./sections/Technologies";
import Sidebar from "./sections/Sidebar";
import RightSidebar from "./sections/RightSidebar";

export default function SectionsPage() {
  return (
    <Container maxWidth="md">
      <TopBar />
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Footer />
      <Sidebar />
      <RightSidebar />
    </Container>
  );
}
