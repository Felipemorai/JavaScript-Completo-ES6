// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

let previousLink;

linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        if (previousLink) {
            previousLink.classList.remove('ativo');
        }
        event.currentTarget.classList.toggle('ativo');

        previousLink = event.target;
    });
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelector('body');

body.addEventListener('click', (event) => {
    console.log(event.target);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
body.addEventListener('click', (event) => {
    event.target.remove();
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keypress', (event) => {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
});