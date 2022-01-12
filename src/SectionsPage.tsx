import About from "./sections/About";
import Projects from "./sections/Projects";
import "./SectionsPage.scss";
import { Container, Grid } from "@mui/material";
import Header from "./sections/Header";
import TopBar from "./navigation/TopBar";
import Footer from "./sections/Footer";
import Technologies from "./sections/Technologies";


export default function SectionsPage() {
  return (
    <Container maxWidth="lg"  >
      <TopBar />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
        <About />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Technologies />
        </Grid>
      </Grid>
      <Projects />
      <Footer/>
    </Container>
  );
}
