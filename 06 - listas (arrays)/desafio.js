/*

DESAFIO 08 - Crie um programa que dado um número imprima a sua tabuada.

*/

// Resolução do desafio 08:
let numero = 5;

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

/* 

DESAFIO 09 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
    
*/

// Resolução do desafio 09:
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < listaNumeros.length; i++) {
  if (listaNumeros[i] % 2 === 0) {
    console.log(listaNumeros[i]);
  }
}

/*

DESAFIO 10 - Faça um programa que dado uma lista de nomes imprima os nomes que começam com a letra "A".

*/

// Resolução do desafio 10:
let listaNomes = ["Ana", "Bruno", "Carlos", "Daniel", "Elaine", "Fernanda"];

for (let i = 0; i < listaNomes.length; i++) {
  if (listaNomes[i][0] === "A") {
    console.log(listaNomes[i]);
  }
}

/*

DESAFIO 11 - Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50

*/

// Resolução do desafio 11:
let listaNumerosPares = [];

for (let i = 10; i <= 50; i++) {
    if (i % 2 === 0) {
        listaNumerosPares.push(i);
    }
    }

console.log(listaNumerosPares);

/*

DESAFIO 12 - Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).

*/

// Resolução do desafio 12:
let listaMedias = [10, 5, 6, 4, 3, 2, 7, 8, 9];

for (let i = 0; i < listaMedias.length; i++) {
    if (listaMedias[i] < 5) {
        console.log(listaMedias[i]);
    }
}

/*

DESAFIO 13 - Dado uma lista com as notas tiradas pelos alunos. Imprima a maior nota.

*/

// Resolução do desafio 13:
let listaNotas = [10, 5, 6, 4, 3, 2, 7, 8, 9];
let maiorNota = 0;

for (let i = 0; i < listaNotas.length; i++) {
    if (listaNotas[i] > maiorNota) {
        maiorNota = listaNotas[i];
    }
}

console.log(maiorNota);