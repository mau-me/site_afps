import React from "react";
import Layout from "../layouts";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import jogadores from "../../data/jogadoresData";

const Jogadores = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Container>
        <Typography variant={isSmallScreen ? "h3" : "h1"}>Jogadores</Typography>
        <List>
          {jogadores.map((jogador, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={jogador.nome}
                secondary={`Idade: ${jogador.idade} anos - Posição: ${jogador.posicao}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default Jogadores;
