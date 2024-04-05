const jogadores = [
  { nome: "Agildo", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Anderson", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Antônio Luiz", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Barcelar", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Bruno", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Bugari", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Cabecinha", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Caboco", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Carreta", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Cássio", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Catu", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Cristovão", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Davi", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Diego", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Douglas", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Eduardo Bi", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Erivaldo", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Fal", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Gamela", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Giraia", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Gueuri", idade: getRandomAge(), posicao: getRandomPosition() },
  {
    nome: "Guto Velha-Guarda",
    idade: getRandomAge(),
    posicao: getRandomPosition(),
  },
  {
    nome: "Guto de Xurita",
    idade: getRandomAge(),
    posicao: getRandomPosition(),
  },
  { nome: "Humberto", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jacó", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jailson", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jão", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jeferson", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jomar", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jotinha", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Jurandir", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Kevin", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Luquinha", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Maicon", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Marcelo", idade: getRandomAge(), posicao: getRandomPosition() },
  {
    nome: "Mauricio P. Menezes",
    idade: getRandomAge(),
    posicao: getRandomPosition(),
  },
  {
    nome: "Mauricio Souza Menezes",
    idade: getRandomAge(),
    posicao: getRandomPosition(),
  },
  { nome: "Neilton", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Nico", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Pantera", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Papa-Capim", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Pato", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Peixinho", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Rabá", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Rafael", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Rai", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Reinaldo", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Reni", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Renê", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Rogério", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Samuel", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Stive", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Tarciso", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Tela", idade: getRandomAge(), posicao: getRandomPosition() },
  { nome: "Titinga", idade: getRandomAge(), posicao: getRandomPosition() },
];

function getRandomAge() {
  return Math.floor(Math.random() * 10) + 20; // Gera uma idade entre 20 e 29 anos
}

function getRandomPosition() {
  const posicoes = ["Atacante", "Meio-campista", "Zagueiro", "Goleiro"];
  const randomIndex = Math.floor(Math.random() * posicoes.length);
  return posicoes[randomIndex];
}

export default jogadores;
