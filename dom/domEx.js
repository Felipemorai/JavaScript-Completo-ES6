// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;

console.log(url);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');

ativo.addEventListener('click', function() {
    console.log('Selecionou a classe ' +  ativo.className);
});
// Retorne a linguagem do navegador
const lang = navigator.language;

console.log(lang);
// Retorne a largura da janela 
const largura = window.innerWidth;

console.log(largura);