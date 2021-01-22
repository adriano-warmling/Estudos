//

var x = 5;
var y = 10;

x += y; // x = x + y (15)
console.log(x);

x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//operador ternário

var idade = 19;
var podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber'; // condição ? true : false (sintaxe)
console.log(podeBeber); // Pode beber

var semDiabetes = true;
var podeBeber = idade >= 18 && semDiabetes == true ? 'Bebe' : 'não'; //já retorna um true ou false se testar a condição
console.log(podeBeber);

//
//Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
//

//Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

//

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito =
    possuiCarro && possuiCasa ? 'Dê o crédito' : 'Não dê o crédito';
console.log(darCredito);

var darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
console.log(`Pode dar Crédito ${darCredito}`);

var darCredito = possuiCarro == true && possuiCasa == true ? 'SIM' : 'NÃO';
console.log(darCredito);
console.log(`Pode dar Crédito ${darCredito}`);
