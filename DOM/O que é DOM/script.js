// DOM - Document Object Model

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

//
/* window é o objeto global,
 por isso não precisamos chamar ele
 na frente dos seus métodos e propriedades. */

window.alert('Isso é um alerta');
alert('Alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

//
// NODE
// Toda tag html é representada pelo objeto Element
// e por isso herda os seus métodos e propriedades.
// Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', function () {
    console.log('Clicou em ', titulo);
});

titulo.addEventListener('click', function () {
    console.log('Clicou em ', titulo.innerText);
});

function callbackh1() {
    console.log('Mouse 1 em ', titulo);
}

titulo.addEventListener('click', callbackh1);

//titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

//

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo'); //pega apenas o primeiro
const elementosAtivos = document.querySelectorAll('.ativo'); //pega todos

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(`Essa é a linguagem: ${linguagem}`);

// Retorne a largura da janela
console.log(`A largura da janela é: ${window.innerWidth}`);
