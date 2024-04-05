import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import jogadores from "../../data/jogadoresData";

const Jogadores = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      <Container>
        <Typography variant={isSmallScreen ? "h3" : "h1"}>Jogadores</Typography>
        <List>
          {jogadores.map((jogador, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="subtitle1">{jogador.nome}</Typography>
                    <Typography variant="subtitle2">{`Idade: ${jogador.idade} anos`}</Typography>
                    <Typography variant="subtitle2">{`Posição: ${jogador.posicao}`}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
        {showScrollButton && (
          <Box
            sx={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 9999,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleScrollToTop}
              sx={{
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                minWidth: "auto",
                minHeight: "auto",
              }}
            >
              <KeyboardArrowUpIcon />
            </Button>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default Jogadores;
