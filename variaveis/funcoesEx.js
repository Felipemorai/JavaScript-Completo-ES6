// Crie uma função para verificar se um valor é Truthy
function verificarTruthy(valor) { // como eu fiz
    if(Boolean(valor) == true) {
        console.log('É Truthy');
    } else {
        console.log('É Falsy');
    }
}

verificarTruthy(12);

function isTruthy(dado) { // como o professor fez
    return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}

console.log(perimetroQuadrado(5)); // 20

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Luiz Felipe', 'Morais'));

// Crie uma função que verifica se um número é par
function parImpar(numero) { // como eu fiz
    if(numero % 2 == 0) {
        console.log('É par');
        return
    } else {
        console.log('É impar');
        return
    }
}

parImpar(2); // par
parImpar(3); // impar
parImpar(5); // impar

function isEven(numero) { // como o professor fez
    var modulo = numero % 2;
    if(modulo === 0) {
        return true;
    } else {
        return false;
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}

console.log(tipoDeDado('tipo'));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
    console.log(nomeCompleto('Felipe', 'Morais'));
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  