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

// Escopo de Bloco
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor formade declaramos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
if(true) {
    var mes = 'Dezembro';
    console.log(mes);
}
console.log(mes); // Dezembro

if(true) {
    let mes2 = 'Setembro';
    console.log(mes2);
}

// Var Vaza o Bloco
// Mesmo com condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.
if(false) {
    var car2 = 'Ferrari';
    console.log(car2);
}

console.log(car2);

// Const e Let no lugar de var
// A partir de agora vamos utilixar apenas const e let para declaramos variáveis.
if(true) {
    const moto = 'Honda';
    console.log(moto);
}
/* console.log(moto); */ // erro, moto is not defined

// {} cria um bloco
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
{
    var car3 = 'Fiat';
    const ano = 2018;
}
console.log(car3); // Carro
/* console.log(ano); */ // erro ano is not defined

// For Loop
// Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.
for(var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}
console.log(i); // 10

// For Loop com Let
// Com o let evitamos que o número vaze
/* for(let index = 0; index <= 10; index++) {
    console.log(`Número ${index}`);
}
console.log(index); */ // i is not defined