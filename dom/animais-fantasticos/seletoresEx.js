// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');

console.log(img);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('[src^="./img/imagem"]');
console.log(imagem);
// Selecione todos os links internos (onde o href começa com #)
const todosLinks = document.querySelectorAll('[href^="#"]');

console.log(todosLinks);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");

console.log(primeiroH2);
// Selecione o último p do site
const ultimoP = document.querySelector('.animais-descricao p:last-child');

console.log(ultimoP);

const ultimoPSite = document.querySelector('.copy p:last-child');

console.log(ultimoPSite);

const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);