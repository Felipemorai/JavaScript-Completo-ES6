// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const p = copy.querySelector('p');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);
copy.removeChild(p);

// Selecione o primeiro DT da dl de Faq
const primeiroDT = document.querySelector('.faq-lista dt');

console.log(primeiroDT);
// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDT.nextElementSibling;

console.log(primeiroDD);
// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;