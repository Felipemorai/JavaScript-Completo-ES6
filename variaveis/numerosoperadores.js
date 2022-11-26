var idade = 20;
var gols = 1000;
var pi = 3.14;
var exp = 2e10;

console.log(exp);

// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50;
var multiplicacao = 100 * 2; // 200;
var dividao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var sum = '100' + 50; // 10050
var testeNaN = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(isNaN(sum));
console.log(isNaN(testeNaN));

// NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // 80kg
var pesoPorDois = peso / 2; // NaN a Number

console.log(peso);
console.log(pesoPorDois);

// A ordem importa
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;

console.log(soma1);
// Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++);
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
