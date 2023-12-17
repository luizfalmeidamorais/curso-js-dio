/*

DESAFIO 06 - Crie uma classe para representar carros.

Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível, calcule o custo total da viagem.

*/

// Resolução do desafio 06:
class Carro {
  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  custoTotalViagem(distancia, precoCombustivel) {
    let custoTotal = (distancia / this.gastoMedio) * precoCombustivel;
    return custoTotal;
  }
}

let carro = new Carro("Fiat", "Vermelho", 10);
let custoTotal = carro.custoTotalViagem(100, 5);
console.log("O custo total da viagem é de R$ " + custoTotal.toFixed(2));

/*

DESAFIO 07 - Crie uma classe para representar pessoas.

As pessoas possuem um nome, uma idade, uma altura e um peso.
As pessoas devem ter a capacidade de dizer o valor do seu IMC.
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75m de altura e peça ao José para dizer o valor do seu IMC.

*/

// Resolução do desafio 07:
class Pessoa {
  constructor(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }

  calcularImc() {
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }

  dizerValorIMC() {
    let imc = this.calcularImc();
    console.log("O valor do IMC é " + imc);
  }
}

const jose = new Pessoa("José", 30, 1.75, 70);
jose.dizerValorIMC();
