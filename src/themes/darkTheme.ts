
import { responsiveFontSizes } from "@mui/material/styles";
import createTheme, { Theme } from "@mui/material/styles/createTheme";

// // border
// const borderWidth = 2;
// const borderColor = "rgba(0, 0, 0, 0.13)";

// // breakpoints
// const xl = 1920;
// const lg = 1280;
// const md = 960;
// const sm = 600;
// const xs = 0;

// // spacing
// const spacing = 8;

const theme: Theme = createTheme({
    palette: {
       mode: 'dark',
       background: {
         paper: '#33545F',
         default: '#002A38'
       },
       primary: {
        main: '#f4511e',
      }
      }
});

export default responsiveFontSizes(theme);