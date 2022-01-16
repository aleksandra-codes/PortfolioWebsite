import About from "./sections/About";
import Projects from "./sections/Projects";
import "./SectionsPage.scss";
import { Container, Grid } from "@mui/material";
import Header from "./sections/Header";
import TopBar from "./navigation/TopBar";
import Footer from "./sections/Footer";
import Technologies from "./sections/Technologies";
import Portfolio from "./sections/Portfolio";
import Sidebar from "./sections/Sidebar";
import RightSidebar from "./sections/RightSidebar";
import Contact from "./sections/Contact";


export default function SectionsPage() {
  return (
    <Container maxWidth="md"  >
      <TopBar />
      <Header />
      <Grid container spacing={2}>
        {/* <Grid item xs={12} md={12} lg={7}> */}
        <About />
        {/* </Grid> */}
        {/* <Grid item xs={12} md={12} lg={5}>
          <Technologies />
        </Grid> */}
      </Grid>
      <Projects />
      {/* <Portfolio /> */}
      <Footer/>
      <Sidebar/>
      <RightSidebar />
    </Container>
  );
}
