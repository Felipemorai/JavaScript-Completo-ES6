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
const gridSection = document.getElementsByClassName('.grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Selecionar todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);