// ForEach
// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item) {
    console.log(item);
});

// Parâmetros do forEach
// O primeiro parãmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: item, index e array;
imgs.forEach(function(item, index, array) {
    console.log(item); // o item atual no loop
    console.log(index); // o número do index
    console.log(array); // a Array completa
});

// ForEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item) {
    console.log(item);
});

// Arrow Function
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow = > após os argumentos.
imgs.forEach((item) => {
    console.log(item);
});

// Parâmetros e Parênteses 
// parãmetro único não precisa de parênteses
imgs.forEach(item => {
    console.log(item);
});

// multiplos parãmetros precisam de parênteses
imgs.forEach((item, index) => {
    console.log(item, index);
});

// sem parãmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
    console.log(i++);
});
// É melhor utilizar os parênteses

// versão curta
imgs.forEach((item) => console.log(i++));

// Return
// É possível omitir as chaves {} para uma função que retorna uma linha.
imgs.forEach(item =>
    console.log(item)
);

// Ou
imgs.forEach(item => console.log(item));

// Não é permitido fechar a linha com ;
