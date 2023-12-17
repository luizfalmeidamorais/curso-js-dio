/*

DESAFIO 14 - Faça um programa que receba um número e escreva a sua respectiva tabuada.

Exemplo:

Entrada -> 2

Saída -> 2 x 1 = 2
        2 x 2 = 4
        2 x 3 = 6
        2 x 4 = 8
        2 x 5 = 10
        2 x 6 = 12
        2 x 7 = 14
        2 x 8 = 16
        2 x 9 = 18
        2 x 10 = 20

*/

// Resolução do desafio 14:
const { gets, print } = require("./desafios");

const numero = gets();

for (let i = 1; i <= 10; i++) {
  print(numero + " x " + i + " = " + numero * i);
}

/*

DESAFIO 15 - Faça um programa que receba a quantidade de números e seus respectivos valores.

Imprima o maior e o menor número deste conjunto.

Exemplo:

Entrada => 4, 10, 150, 80, 200

Saída => 200, 10

*/

// Resolução do desafio 15:
const { gets, print } = require("./desafios");

const quantidadeDeNumeros2 = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeNumeros2; i++) {
  const numero = gets();
  if (numero > maiorValorEncontrado) {
    maiorValorEncontrado = numero;
  }
}

print(maiorValorEncontrado);

/*

DESAFIO 16 - Faça um programa que receba a quantidade de números e seus respectivos valores.

Imprima todos os números pares.

Exemplos:

Entrada => 5, 1, 2, 3, 4, 5

Saída: Números pares => 2, 4

*/

// Resolução do desafio 16:
const { gets, print } = require("./desafios");

const quantidadeDeNumeros3 = gets();
let listaNumerosPares = [];

for (let i = 0; i < quantidadeDeNumeros3; i++) {
  const numero = gets();
  if (numero % 2 === 0) {
    listaNumerosPares.push(numero);
  }
}

print(listaNumerosPares);
