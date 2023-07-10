import React from "react";
import Layout from "../layouts";
import { Typography, Container } from "@mui/material";

const JogadoresPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1" component="h1">
          Jogadores
        </Typography>
        {/* Conteúdo adicional da página de jogadores aqui */}
      </Container>
    </Layout>
  );
};

export default JogadoresPage;
