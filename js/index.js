const node = document.createElement("li");
const lista = document.getElementById("listaJogadores");

(async function povoarListaJogadores() {
  const url = "https://afps-backend.herokuapp.com/atletas";
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const jogadores = data.map((jogador) => {
        const { __v, ...outrosCampos } = jogador;
        return outrosCampos;
      });

      jogadores.forEach((jogador, index) => {
        let linha = criarLinha(index + 1, jogador.nome);
        lista.appendChild(linha);
      });
    });
})();

function criarLinha(id, nome) {
  const linha = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdNome = document.createElement("td");

  tdId.innerHTML = id;
  tdNome.innerHTML = nome;

  linha.appendChild(tdId);
  linha.appendChild(tdNome);

  return linha;
}
