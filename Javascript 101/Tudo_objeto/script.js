var nome = 'André';

nome.length; // 5
console.log(nome.length);

nome.charAt(1); // 'n'
console.log(nome.charAt(1));

nome.replace('ré', 'rei'); // 'Andrei'
console.log(nome.replace('ré', 'rei'));

nome; // 'André'
console.log(nome);

nomeMinusculo = nome.toLowerCase(); // 'andre'
console.log(nomeMinusculo);

var altura = 1.8;
var altura2 = 1.5;

//Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

altura.toString(); // '1.8'
console.log(altura.toString());

altura.toFixed(); // '2'
console.log(altura.toFixed());

altura2.toFixed(); // 1.5 passa para '2'
console.log(altura2.toFixed());

//

var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {});
