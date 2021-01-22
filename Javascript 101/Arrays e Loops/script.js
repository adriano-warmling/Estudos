// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0]; // Switch
videoGames[2]; // Xbox

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// FOR LOOP
// Fazem algo repetidamente até que uma condição seja atingida.

for (let numero = 0; numero < 3; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console
// O for loop possui 3 partes, início, condição e incremento, o melhor é usar o let, mas pode usar var tbm

//WHILE LOOP

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

// BREAK
// O loop irá parar caso encontro e palavra break

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'PS4') {
        break;
    }
}

// FOREACH
// forEach é um método que executa uma função para cada item da Array.
// É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var frutas = ['Banana', 'Maçã', 'Uva', 'Ameixa', 'Laranja'];
frutas.forEach(function (item, index, array) {
    console.log(item, index, array);
});
// O argumento item será atribuído dinamicamente
// a sequencia é de parametros é sempre essa, item, index, array independente do texto

var frutas2 = ['Jaca', 'Melancia', 'Pera', 'Tomate'];
frutas2.forEach(function (alpha, betha, ohmega) {
    console.log(alpha, betha, ohmega);
});

// exercicios

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < brasilCampeao.length; i++) {
    console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}.`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
