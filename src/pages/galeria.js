import React from "react";
import Layout from "../layouts";
import { Typography, Container } from "@mui/material";

const GaleriaPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1" component="h1">
          Galeria de Fotos
        </Typography>
        {/* Conteúdo adicional da página de galeria de fotos aqui */}
      </Container>
    </Layout>
  );
};

export default GaleriaPage;
