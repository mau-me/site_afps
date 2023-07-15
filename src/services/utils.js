// utils.js

// Função para calcular a idade em anos
export function calcularIdade(dataNascimento) {
  const dataAtual = new Date();
  const dataNasc = new Date(dataNascimento);
  let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

  // Verificar se o aniversário ainda não ocorreu este ano
  const mesAtual = dataAtual.getMonth();
  const diaAtual = dataAtual.getDate();
  const mesNasc = dataNasc.getMonth();
  const diaNasc = dataNasc.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    idade--;
  }

  return idade;
}
