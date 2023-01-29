// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    };
}

const felipe = new Pessoas('Felipe', 'Morais', 18);
console.log(felipe.nomeCompleto());
console.log(felipe);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
NodeList.entries;
NodeList.forEach;
NodeList.item;
NodeList.keys;
NodeList.values;

HTMLCollection.item;
HTMLAllCollection.namedItem;

Document.append;
Document.clear;
Document.close;
Document.open;

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();


// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
