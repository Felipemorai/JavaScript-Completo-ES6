// nomeie 3 propriedades ou métodos de strings
var nome = "Luiz Felipe";

nome.length; // 11
nome.charAt; // l
nome.replace('z', 's'); // luis felipe
nome.slice('5', '11'); // felipe
// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log('Clicou');
})

btn.classList.add('btn'); // add class

btn.className; // btn

btn.type; // submit

var click = btn.innerText; // Click
console.log(click);
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
let btn2 = document.querySelector('#copy');

btn2.addEventListener('click', function(e) {
    let textArea = document.querySelector(".text");
    textArea.select();
    document.execCommand('copy');
})