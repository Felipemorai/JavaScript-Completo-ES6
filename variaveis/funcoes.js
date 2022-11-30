const btn = document.querySelector('button');

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

function ativa() {
    console.log('Função ativa');
}

ativa();

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80); // 80 e 1.80 são os argumentos
imc(60, 1.70); // 60 e 1.70 são os argumentos


function corFavorita(cor) {
    if (cor === 'Azul') {
        return 'Você gosta do céu.';
    } else
    if (cor === 'Verde') {
        return 'Você gosta de mato.';
    } else
    if (cor === 'Amarelo') {
        return 'Você gosta do sol.';
    } else 
    if (cor === 'Rosa') {
        return 'Você gosta de rosa.';
    } if (cor === 'Preto') {
        return 'Você gosta da escuridão da noite.';
    } else {
        return 'Você não gosta de nada.';
    }
}

console.log(corFavorita('Preto'));

// Argumentos podem ser funções
/* Chamadas de Callback, geralmente são funções que ocorrem após algum evento */
btn.addEventListener('click', function() {
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click' que é o tipo de evento
// Segundo é uma função anônima que é o Callback