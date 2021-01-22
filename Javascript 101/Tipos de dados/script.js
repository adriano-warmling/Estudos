// aula 02

var nome1 = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

console.log('oi');

var nome = 'André';
console.log(typeof nome);
// retorna string

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

//template string
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
var frase3 = `Romário fez ${gols * 2} gols`;

// Declare uma variável contendo uma string
var alpha = 'olá';
console.log(typeof alpha);

// Declare uma variável contendo um número dentro de uma string
var betha = '33';
console.log(typeof betha);

// Declare uma variável com a sua idade
var ano = 2020;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var sobrenome = 'Warm';
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var fraseX = "It's Time";
console.log(fraseX);

//Operadores

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 resto da divisão
