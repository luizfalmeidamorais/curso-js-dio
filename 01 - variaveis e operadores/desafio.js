/*

DESAFIO 01 - Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1. Preço do Combustível (por litro)
2. Distância (km)
3. Consumo do Veículo (por km)

Imprima no console o valor que será gasto para realizar esta viagem.

*/

// Resolução do desafio 01:
let precoCombustivel = 5.0;
let distancia = 100;
let consumoVeiculo = 10;

let valorViagem = (distancia / consumoVeiculo) * precoCombustivel;

console.log("O valor da viagem é de R$ " + valorViagem.toFixed(2));
