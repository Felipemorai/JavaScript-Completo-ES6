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