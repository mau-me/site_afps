import React from "react";
import Layout from "../layouts";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const Contato = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Container>
        <Typography variant={isSmallScreen ? "h3" : "h1"}>Contato</Typography>
        {/* Restante do conteúdo */}
      </Container>
    </Layout>
  );
};

export default Contato;
