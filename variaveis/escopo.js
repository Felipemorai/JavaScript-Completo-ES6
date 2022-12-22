// Escopo de Função
// Váriáveis declaradas dentro de funções não são acessadas fora das mesmas.
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
/* console.log(carro); */ // Erro, carro is not defined
// Escopo evita o conflito entre nomes.

// Variável Global(Erro)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma váriavel que pode ser acessar em qualquer escopo (global). Isso é um erro.
function mostrarCarro2() {
    carro = 'Fusca';
    console.log(carro);
}

mostrarCarro2(); // Fusca
console.log(carro); // Fusca
// 'use strict' impede isso

// Escopo de Função (Pai)
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
var carro2 = 'Fusca';

function mostrarCarro3() {
    var frase = `Meu carro é um ${carro2}`;
    console.log(frase);
}

mostrarCarro3(); // Meu carro é um Fusca
console.log(carro2); // Fusca