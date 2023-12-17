function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else {
    return "Obeso";
  }
}

let peso = 100;
let altura = 1.8;

let imc = calcularImc(peso, altura);
let classificacao = classificarImc(imc);

console.log("O seu IMC é " + imc + " e sua classificação é " + classificacao);
