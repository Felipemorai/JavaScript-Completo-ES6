// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

console.log(itensMenu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})

console.log(itensMenu);

itensMenu[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const hasAlt = img.hasAttribute('alt');

    console.log(hasAlt);
});
// Modifique o href do link externo no menu
const menuLink = document.querySelector('a[href^="https://"]');

console.log(menuLink);

const href = menuLink.setAttribute('href', 'https://www.google.com');

console.log(href);

const carro = {
    portas: 4,
    andar(km) {
        console.log(`Andou ${km} km`);
    }
}