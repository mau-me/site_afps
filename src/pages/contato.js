import React from "react";
import Layout from "../layouts";
import { Typography, Container } from "@mui/material";

const ContatoPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1" component="h1">
          Contato
        </Typography>
        {/* Conteúdo adicional da página de contato aqui */}
      </Container>
    </Layout>
  );
};

export default ContatoPage;
