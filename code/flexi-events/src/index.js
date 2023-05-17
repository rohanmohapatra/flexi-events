import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
      light: "#ccccff",
      dark: "#624cab",
    },
    common: {
      black: "#130303",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
