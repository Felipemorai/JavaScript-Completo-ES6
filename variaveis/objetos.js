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