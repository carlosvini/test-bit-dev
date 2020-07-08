import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);