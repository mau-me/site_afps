import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
        backgroundColor: "#f5f5f5",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" align="center" color="textSecondary">
          © {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          Desenvolvido por{" "}
          <Link href="https://mau-me.github.io/" target="_blank" rel="noopener">
            maume
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
