var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    sexo: 'homem',
    possuiFaculdade: true,
};

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.table(quadrado);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
    nome: 'Adriano',
    sobrenome: 'Warmling',
    idade: 35,
    cidade: 'Floripa',
};

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomecompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir';
        } else {
            return 'Silencio';
        }
    },
};

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
