// String
// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

// str.length
// Propriedade com o total de caracteres da string.
const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a

// str.charAt(n)
// Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript';

linguagem.charAt(0); // j
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

// str.concat(str2, str3, ...)
// Concatena as strings e retorna o resultado.
const frase2 = 'A melhor linguagem é ';
const linguagem2 = 'JavaScript';

const fraseCompleta = frase2.concat(linguagem2, '!!');

// str.includes(search, position)
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

// str.endsWith(search) e str.startsWith(search)
// Procura pela string exata dentro de outra string. A procura é case sensitive.
fruta2 = 'Banana';

fruta2.endsWith('nana'); // true
fruta2.startsWith('Ba'); // tru
fruta2.startsWith('na'); // false

// str.slice(start, end)
// Corta a string de acordo com os valores de start e end.
const transacao1 =  'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao2.slice(-4); // ente
transacao3.slice(3, 6); // ósi

// str.substring(start, end)
// Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
const linguagem3 = 'JavaScript';
linguagem3.substring(3,5); // aS
linguagem3.substring(0,4); // Java
linguagem3.substring(4); // Script
linguagem3.substring(-3); // JavaScript

// str.indexOf(search) e str.lastIndexOf(search)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf eke retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

// str.padStart(n, str) e str.padEnd(n, str) e str.padEnd(n, str)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n=10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....

// str.repeat(n)
// Repete a string (n) vezes.
const frase3 = 'Ta';

frase3.repeat(5); // TaTaTaTaTa

// str.replace(regexp|substr, newstr|function)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontar.
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
// Veremos mais sobre Regular
// Expression

// str.split(padrao)
// Divide a string de acordo com o padrão passado e retorna uma array.
const listaItens1 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
// join é um método de Array

// str.toLowerCase() e str.toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de um string.
const valor = '  R$ 23.00  ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // "R$ 23.00  "
valor.trimEnd(); // '  R$ 23.00'

