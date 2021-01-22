var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

/*
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})


// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'');// false
*/
