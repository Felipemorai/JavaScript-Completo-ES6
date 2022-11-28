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

// Operadores de comparação
/* O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos === */
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

var x = 10;
var y = 'Gatos';

console.log(x == 10);
console.log(y !== 'Gato');

// Operadores Lógicos &&
// && Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5);

if(condicional) {
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso');
}

// Operadores Lógicos || 
// || Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

var condicional3 = (5 - 5) || (5 + 5) && (10 - 2);
console.log(condicional3);

// Switch
/* Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira. */
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Branco':
        console.log('Olhe para as nuvens.');
        break;
    default:
        console.log('Feche os olhos');
}