// Prototype
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

// funcao.prototype
// é possível adicionar novas propriedades e métodos ao objeto prototype.
Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
}

console.log(Pessoa.prototype); // retorna o objeto

// Acesso ao Protótipo
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

const maria = new Pessoa('Maria', 40);

maria.nome;
maria.idade;
maria.andar();
maria.nadar();

// proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto_- diretamente.
// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
maria.andar();
maria.__proto__.andar();

// Herança de Protótipo
// O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
Object.prototype;
maria.toString();
maria.isPrototypeOf();
maria.valueOf();

// Construtores Nativos
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

