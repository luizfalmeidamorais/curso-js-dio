class Pessoa {
    nome;
    idade;
    sexo;
    altura;
    peso;
    nacionalidade;
    profissao;

    constructor(nome, idade, sexo, altura, peso, nacionalidade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
        this.nacionalidade = nacionalidade;
        this.profissao = profissao;
    }

    falar() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + " é mais velho(a) que " + p2.nome);
    } else if (p1.idade < p2.idade) {
        console.log(p1.nome + " é mais novo(a) que " + p2.nome);
    } else {
        console.log(p1.nome + " tem a mesma idade que " + p2.nome);
    }
}

const luiz = new Pessoa("Luiz", 25, "M", 1.8, 100, "Brasileiro", "Programador");
const maria = new Pessoa("Maria", 25, "F", 1.7, 60, "Brasileira", "Programadora");

compararPessoas(luiz, maria);