import React from "react";
import Layout from "../layouts";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";

const Comissao = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Container>
        <Typography variant={isSmallScreen ? "h3" : "h1"}>Comissão</Typography>
        {/* Restante do conteúdo */}
      </Container>
    </Layout>
  );
};

export default Comissao;
