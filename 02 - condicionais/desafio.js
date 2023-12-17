/*

DESAFIO 02 - Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1. Preço do Etanol (por litro)
2. Preço da Gasolina (por litro)
3. Distância (km)
4. Tipo de Combustível (Etanol ou Gasolina)
5. Consumo do Veículo (por km)

*/

// Resolução do desafio 02:
let precoEtanol = 4.0;
let precoGasolina = 5.0;
let distancia = 100;
let tipoCombustivel = "Etanol";
let consumoVeiculo = 10;

let valorViagem = (distancia / consumoVeiculo) * precoEtanol;

if (tipoCombustivel === "Etanol") {
  valorViagem = (distancia / consumoVeiculo) * precoEtanol;
} else {
  valorViagem = (distancia / consumoVeiculo) * precoGasolina;
}

console.log("O valor da viagem é de R$ " + valorViagem.toFixed(2));
