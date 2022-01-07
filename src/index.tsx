import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
          <App />
      </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
