import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Bem-vindo à Associação de Porto dos Santos!
      </h1>
      <p className="home-paragraph">
        Aqui você encontrará informações sobre nossa associação de futebol.
      </p>

      <div className="home-info">
        <h2 className="home-subtitle">Principais informações:</h2>
        <p className="home-paragraph">Localização</p>
        <p className="home-paragraph">
          Nossa sede está localizada no campo situado na Rua Alto do Verão, em
          Porto dos Santos, Itaparica, Bahia.
        </p>

        <p className="home-paragraph">Número de jogadores</p>
        <p className="home-paragraph">
          Contamos com uma vibrante comunidade de aproximadamente X jogadores.
          Junte-se a nós e faça parte dessa equipe apaixonada!
        </p>

        <p className="home-paragraph">Jogos aos domingos</p>
        <p className="home-paragraph">
          Nossos jogos são realizados aos domingos pela manhã, oferecendo uma
          ótima oportunidade para unir-se ao esporte, celebrar a amizade e
          desfrutar de partidas emocionantes.
        </p>

        <p className="home-paragraph">Comissão atuante</p>
        <p className="home-paragraph">
          Nossa associação é administrada por uma comissão composta por três
          membros dedicados: Mauricio Porto, Stivie e Bugari. Estamos empenhados
          em criar um ambiente inclusivo e acolhedor para todos os membros.
        </p>
      </div>

      <div className="home-cta">
        <h2 className="home-subtitle">
          Pronto para fazer parte do nosso time?
        </h2>
        <button className="home-button">Inscreva-se agora</button>
        <p className="home-paragraph">
          Se você adora futebol e deseja se juntar a nós, preencha nosso
          formulário de inscrição e faça parte dessa emocionante jornada
          esportiva.
        </p>

        <p className="home-paragraph">Participe de nossos eventos</p>
        <p className="home-paragraph">
          Além dos jogos regulares, organizamos eventos especiais, como torneios
          e festas. Fique de olho em nosso calendário e participe das
          atividades!
        </p>
      </div>

      <div className="home-contact">
        <h2 className="home-subtitle">Entre em contato</h2>
        <p className="home-paragraph">
          Tem alguma pergunta ou sugestão? Estamos aqui para ajudar. Entre em
          contato conosco através do formulário de contato ou pelos nossos
          canais de comunicação.
        </p>

        <p className="home-paragraph">
          Siga-nos nas redes sociais para ficar por dentro das últimas novidades
          e fotos de nossos jogos e eventos. Junte-se à nossa comunidade
          apaixonada de futebol!
        </p>

        <div className="home-social-icons">
          <a href="#" className="home-links">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#" className="home-links">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="#" className="home-links">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
