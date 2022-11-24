// 7 tipos de dados
// Todos são primitivos exceto os objetos.
var nome = 'Luiz Felipe'; // String
var idade = 20; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//Primitivos são dados imutáveis

console.log(typeof nome);
// retorna string

var sobrenome = 'Morais';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`;

console.log(frase);
console.log(typeof frase);
console.log(frase2);

var melhor = "teste";
var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

var ano = '2022/';
var mes = 11;
console.log(ano + mes);



