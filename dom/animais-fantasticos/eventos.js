// addEventListener
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.
const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
    console.log('clicou');
})
// O terceiro parâmetro é opcional

// Callback
// É uma boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
const title = document.querySelector('.titulo');

function callback() {
    console.log('Clicou');
}

title.addEventListener('click', callback); // 🚀
title.addEventListener('click', callback()); // underfined
title.addEventListener('click', function() {
    console.log('Clicou');
});
title.addEventListener('click', () => {
    console.log('Clicou');
});

// Event
// O primeiro parâmetro do callback é referente ao evento que ocorreu.
function callback2(event) {
    console.log(event);
}

img.addEventListener('click', callback2);
// Geralmente utilizam e como nome do parâmetro

// Propriedades do Event
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path;
    console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

// event.preventDefault()
// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá prevenir que o link seja ativado.
const linkExterno = document.querySelector('a[href^="https"]');

function clickNoLink(event) {
    event.preventDefault();
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

// this
// A palavra chave this é uma palavra especial do javascript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
const animaisTitle =document.querySelector('.animais-descricao h2');

function callbackThis(event) {
    console.log(this); // retorna a imagem
    console.log(this.getAttribute('src'));
}

animaisTitle.addEventListener('click', callbackThis);
// Geralmente igual ao event.currentTarget

// Diferentes Eventos
// Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
const h1 = document.querySelector('h1');

function callbackEvent(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', callbackEvent);
h1.addEventListener('mouseenter', callbackEvent);
window.addEventListener('scroll', callbackEvent);
window.addEventListener('resize', callbackEvent);
window.addEventListener('keydown', callbackEvent);

// Keyboard
// Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard
function handleKeyboard(event) {
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    } else 
    if(event.key === 'v') {
        document.body.classList.toggle('vermelho');
    }
}

window.addEventListener('keydown', handleKeyboard);

// forEach e Eventos
// O método addEventListeneré é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('scr');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
})