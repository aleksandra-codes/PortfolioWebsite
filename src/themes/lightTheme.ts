import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

// // colors
// const primary = "#b3294e";
// const secondary = "#4829B2";
// const black = "#343a40";
// const darkBlack = "rgb(36, 40, 44)";
// const background = "#f5f5f5";
// const warningLight = "rgba(253, 200, 69, .3)";
// const warningMain = "rgba(253, 200, 69, .5)";
// const warningDark = "rgba(253, 200, 69, .7)";

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

const theme: Theme = createMuiTheme({
  palette:{
      primary:{
          main: '#fafafa'
      }, 
      secondary: purple
  }
});

export default responsiveFontSizes(theme);