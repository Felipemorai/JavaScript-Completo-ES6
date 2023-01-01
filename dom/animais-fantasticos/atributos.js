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

// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo
// É mutio comum métodos de get e set;

const srcImg = img.getAttribute('src');

console.log(srcImg);

const alt = img.setAttribute('alt', 'Raposa');

console.log(img.getAttribute('alt'));

const hasAlt = img.hasAttribute('alt');

console.log(hasAlt);

const hasTitle = img.hasAttribute('title');

console.log(hasTitle);

// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.
animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += 'vermelho'; // adiciona vermelho á string
animais.attributes = 'class="ativo"'; // não funciona, read-only
// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''