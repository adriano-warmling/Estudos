// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(` esse é o ${carro}`);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

// ESCOPO DE BLOCO
// Variáveis criadas com var, vazam o bloco.
// Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando:
// const e let, pois estas respeitam o escopo de bloco.

if (true) {
    var carro2 = 'Belina'; // var vaza o bloco
    console.log(carro2);
}
console.log(carro2); // Carro

//

if (true) {
    let carro1 = 'brasilia';
    console.log(carro1);
}
//console.log(carro1); // Como usou let ele não vaza o bloco e esse comando falha

//

// {} CRIA UM BLOCO
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
    var mes = 'maio';
    var ano = 2018; // const ou let quebra pois não vaza o bloco
}
console.log(mes); // maio
console.log(ano); // erro ano is not defined

//
// FOR LOOP
// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 5; i++) {
    console.log(`Número ${i}`);
}
console.log(i); // 5

//Melhores práticas tem de criar const ou let para isso

for (let j = 0; j < 3; j++) {
    console.log(`Número ${j}`);
}
//console.log(j); // i is not defined

//
// Por qual motivo o código abaixo retorna com erros?
// Resposta: está tudo dentro de um bloco e const e let não vai acessar, ou troca para var ou coloca o comando dentro do bloco
// {
//     var cor = 'preto';
//     const marca = 'Fiat';
//     let portas = 4;
// }
//console.log(var, marca, portas);
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?

// function somarDois(x) {
//     const dois = 2;
//     return x + dois;
// }
// function dividirDois(x) {
//     return x / dois;
// }
// somarDois(4);
// dividirDois(6);
// Resposta: const dois esta dentro de um bloco e não está acessível aos demais blocos
const dois = 2;

function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
// var numero = 50;

// for (var numero = 0; numero < 10; numero++) {
//     console.log(numero);
// }

// const total = 10 * numero;
// console.log(total);

const numero = 50;

//inclusive pode criar o let que não vai ser afetado pela const
for (let numero = 0; numero < 7; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
