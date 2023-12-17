/*

DESAFIO 03 - Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua situação no final do semestre.

A média é calculada somando o valor das 3 notas e dividindo pelo número de notas (3).

Classificação:
- Média menor que 5: Reprovado
- Média maior ou igual a 5 e menor que 7: Recuperação
- Média maior ou igual a 7: Aprovado

*/

// Resolução do desafio 03:
let nota1 = 5;
let nota2 = 5;
let nota3 = 5;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}

/*

DESAFIO 04 - O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

IMC = pesoEmQuilogramas / alturaEmMetros²

Faça um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.


| IMC em adultos | Situação |
| -------------- | -------- |
| Abaixo de 18,5 | Abaixo do peso |
| Entre 18,5 e 25 | Peso normal |
| Entre 25 e 30 | Acima do peso |
| Acima de 30 | Obeso |

*/

// Resolução do desafio 04:
let peso = 100;
let altura = 1.8;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else {
  console.log("Obeso");
}

/*

DESAFIO 05 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

| Código | Condição de pagamento |
| ------ | --------------------- |
| 1 | À vista em dinheiro ou cheque, recebe 10% de desconto |
| 2 | À vista no cartão de crédito, recebe 5% de desconto |
| 3 | Em duas vezes, preço normal de etiqueta sem juros |
| 4 | Em três vezes, preço normal de etiqueta mais juros de 10% |

*/

// Resolução do desafio 05:
let precoEtiqueta = 100;
let codigoPagamento = 1;

let precoFinal = 0;

if (codigoPagamento === 1) {
  precoFinal = precoEtiqueta * 0.9;
} else if (codigoPagamento === 2) {
  precoFinal = precoEtiqueta * 0.95;
} else if (codigoPagamento === 3) {
  precoFinal = precoEtiqueta;
} else if (codigoPagamento === 4) {
  precoFinal = precoEtiqueta * 1.1;
} else {
  console.log("Código de pagamento inválido");
}

console.log("O preço final é de R$ " + precoFinal.toFixed(2));
