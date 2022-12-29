// ID
// getElementById seleciona e retorna elementos do DOM
// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// Classe e Tag
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
// Seleciona pela classe, retorna uma HTMLCollection
const gridSectionId = document.getElementsByClassName('grid-section');
const contatos = document.getElementsByClassName('grid-section contato');

// Selecionar todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSectionId[0]);

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUL = document.querySelector('ul');

// Busca dentro da UL apenas
const navItem = primeiroUL.querySelector('li');

// Seletor Geral Lista
// querySelectorAll  retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const gridSection = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);

// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// Array-like
// HTMLCollection e NodeList são arrY-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.
gridSection.forEach(function(gridItem, index, array) {
    gridItem.classList.add('azul');
    console.log(index) // index do item na array
    console.log(array) // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

arrayGrid.forEach(function(item) {
    console.log(item);
})