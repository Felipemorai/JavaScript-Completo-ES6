// Boolean
// Existem dois valores booleanos false e true
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais If e Else
if(possuiGraduacao) {
    console.log('Possui graduação');
    var x = 10;
} else {
    console.log('Não possui graduação');
}

console.log(x);

if(possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}

// Truthy e Falsy
/* Existem valores que retornam true e outros que retornam  false quando verificados em uma expressão booleana. */
// Falsy
/* 
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou `` 
*/

// Todo o resto é truthy
// Truthy
/* 
if(true)
if(1)
if(' ')
if('Felipe')
if(-5)
if({})
*/

var nome = "Felipe";

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}

// Operador Lógico de Negação
/* O operador ! nega uma operação booleana. Ou seja, !true é igual a false e !false é igual a true */
// Truthy
/* 
if(!true) // false
if(!1) // false
if(!'') // true
if(!underfined) // true
if(!!' ')  // true
if(!!'')  // false
*/

// Operadores de comparação
// Vão sempre retornar um valor booleano
/* 
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false
*/