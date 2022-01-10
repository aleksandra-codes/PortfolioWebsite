import About from "./sections/About";
import Projects from "./sections/Projects";
import "./SectionsPage.scss";
import { Container, Grid } from "@mui/material";
import Header from "./sections/Header";
import TopBar from "./navigation/TopBar";
import Footer from "./sections/Footer";

export default function SectionsPage() {
  return (
    <Container maxWidth="xl"  >
      <TopBar />
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <About />
        </Grid>
        <Grid item xs={12} md={8}>
          <Projects />
        </Grid>
      </Grid>
      <Footer/>
    </Container>
  );
}
