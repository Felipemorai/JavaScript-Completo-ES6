// Tudo é Objeto
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'André';

var nomeMinusculo = nome.toLowerCase();

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'

// Números
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// Funções
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
/* "function areaQuadrado(lado) {
    return lado * lado;
}" */

areaQuadrado.length; // 1