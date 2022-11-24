var nome = 'Luiz Felipe';
var idade = 20;
var possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade);

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal);

var sobrenome = 'Morais',
    cidade = 'Várzea Alegre';

console.log(sobrenome, cidade);

var semDefinir;

console.log(semDefinir);

/* Hoisting */
console.log(nome1);
var nome1 = 'André';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retorna Designer

var comida;
console.log(comida);
comida = 'Pizza';
console.log(comida);


/* 
const time = 'Vasco';
time = 'Flamengo';

console.log(time); 
*/