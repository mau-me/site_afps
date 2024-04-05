import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h1" component="h1" gutterBottom>
        Bem-vindo à Associação de Porto dos Santos!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aqui você encontrará informações sobre nossa associação de futebol.
      </Typography>
      <Typography variant="h2" component="h2" gutterBottom>
        Principais informações:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Localização"
            secondary="Nossa sede está localizada no campo situado na Rua Alto do Verão, em Porto dos Santos, Itaparica, Bahia."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Número de jogadores"
            secondary="Contamos com uma vibrante comunidade de aproximadamente 'X' jogadores. Junte-se a nós e faça parte dessa equipe apaixonada!"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Jogos aos domingos"
            secondary="Nossos jogos são realizados aos domingos pela manhã, oferecendo uma ótima oportunidade para unir-se ao esporte, celebrar a amizade e desfrutar de partidas emocionantes."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Comissão atuante"
            secondary="Nossa associação é administrada por uma comissão composta por três membros dedicados: Mauricio Porto, Stivie e Bugari. Estamos empenhados em criar um ambiente inclusivo e acolhedor para todos os membros."
          />
        </ListItem>
      </List>
      <Typography variant="h2" component="h2" gutterBottom>
        Pronto para fazer parte do nosso time?
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Inscreva-se agora"
            secondary="Se você adora futebol e deseja se juntar a nós, preencha nosso formulário de inscrição e faça parte dessa emocionante jornada esportiva."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Participe de nossos eventos"
            secondary="Além dos jogos regulares, organizamos eventos especiais, como torneios e festas. Fique de olho em nosso calendário e participe das atividades!"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Entre em contato"
            secondary="Tem alguma pergunta ou sugestão? Estamos aqui para ajudar. Entre em contato conosco através do formulário de contato ou pelos nossos canais de comunicação."
          />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        Siga-nos nas redes sociais para ficar por dentro das últimas novidades e
        fotos de nossos jogos e eventos. Junte-se à nossa comunidade apaixonada
        de futebol!
      </Typography>
      <Typography variant="body1">
        <a
          href="https://facebook.com/sua-associacao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        |{" "}
        <a
          href="https://twitter.com/sua-associacao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        |{" "}
        <a
          href="https://instagram.com/sua-associacao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </Typography>
    </div>
  );
};

export default Home;
