// Document Object Model(DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possivel manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

const href = window.location.href;
const hrefLength = window.location.href.length;

console.log(href, hrefLength);

if(href === 'http://127.0.0.1:5500/dom/dom.html') {
    console.log('O href é igual');
}

// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seis métodos e propriedades.
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Tbm funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

const titulo = document.querySelector('h1');

titulo.innerHTML = 'Article Title';
titulo.style.color = 'violet';
titulo.style.textTransform = 'uppercase';
titulo.style.textAlign = 'center';
titulo.style.fontFamily = 'arial';