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