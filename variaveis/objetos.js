// Objetos
var pessoa = {
    nome: 'Felipe',
    idade: 20,
    profissao: 'Developer',
    possuiFaculdade: false,
    possuiCurso: true,
}

console.log(pessoa.nome); // Felipe
console.log(pessoa.possuiCurso); // true

// Métodos
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

// Métodos
// Abreviação de area: function() {} para area() {}
var quadrado2 = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
    cinco() {
        return 5;
    },
}

console.log(quadrado2.cinco());

// Organizar o código
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Criar um Objeto
// Um objeto é criado utilizando as chaves {}
var carro = {};
var person = {};

console.log(typeof carro); // 'object'

// Dot Notation Get and Set
// Acesse propriedades de um objeto utilizando o ponto .
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma
var menu = {
    width: 800,
    height: 50,
    backgroundColor: "#84e",
}

menu.color = '#FFF';

menu.esconder = function() {
    console.log('Esconder');
}

var bg = menu.backgroundColor; // "#84e"
var cl = menu.color; // "#FFF"

// Adicionar Propriedades e Métodos
// Basta adicionar um novo nome e definir o valor.

var menuAdd = {
    width: 800,
}

menuAdd.height = 50;
menuAdd.position = 'fixed';

// Palavra-chave this
// this irá fazer uma referência ao próprio objeto.
var height = 120;
var menuThis = {
    width: 800,
    height: 50,
    halfHeight() {
        return this.height / 2;
    }
}

menuThis.halfHeight(); // 25
// sem o this pegaria o height de fora do objeto, e retornaria 60