import React from "react";
import Header from "../components/Header";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#145068",
    },
    secondary: {
      main: "#FBAD3E",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      {/* Conteúdo do rodapé aqui */}
    </ThemeProvider>
  );
};

export default Layout;
