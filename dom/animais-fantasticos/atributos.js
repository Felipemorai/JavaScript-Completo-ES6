// classList
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

menu.className += ' new';

console.log(menu.className);

menu.classList.remove('new');

// Attributes
// Retorna uma array-like com os atributos do elemento.
const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

