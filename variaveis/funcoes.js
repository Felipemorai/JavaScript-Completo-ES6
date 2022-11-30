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
        console.log('Você gosta do céu.');
    } else
    if (cor === 'Verde') {
        console.log('Você gosta de mato.');
    } else
    if (cor === 'Amarelo') {
        console.log('Você gosta do sol.');
    } else 
    if (cor === 'Rosa') {
        console.log('Você gosta de rosa.');
    } if (cor === 'Preto') {
        console.log('Você gosta da escuridão da noite.')
    } else {
        console.log('Você não gosta de nada.');
    }
}

corFavorita('Preto');