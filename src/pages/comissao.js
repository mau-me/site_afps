import React from "react";
import Layout from "../layouts";
import { Typography, Container } from "@mui/material";

const ComissaoPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1" component="h1">
          Comissão
        </Typography>
        {/* Conteúdo adicional da página de comissão aqui */}
      </Container>
    </Layout>
  );
};

export default ComissaoPage;
