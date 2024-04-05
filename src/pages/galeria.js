import React from "react";
import Layout from "../layouts";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "../components/GalleryCarousel";

const Galeria = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Container>
        <Typography variant={isSmallScreen ? "h3" : "h1"}>
          Galeria de Fotos
        </Typography>
        <Carousel />
      </Container>
    </Layout>
  );
};

export default Galeria;
