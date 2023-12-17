const { gets, print } = require("./funcoes");

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const nota = gets();
  if (nota > maiorValorEncontrado) {
    maiorValorEncontrado = nota;
  }
}

print(maiorValorEncontrado);
