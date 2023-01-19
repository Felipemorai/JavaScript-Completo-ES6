// Objetos
// Criar um onjeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possivel com o Object.create,mas veremos ele mais tarde.
const carro = {
    marca: 'Marca',
    preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = '4000';

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = '3000';
// carro, fiat e honda apontam para o mesmo objeto.

// Constructor Functions
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que sãp responsáveis por construir novos objetos sempre que chamamos a mesma.
function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const tesla = new Carro();
tesla.marca = 'Tesla';
tesla.preco = 70000;

const fusca = new Carro();
fusca.marca = 'Fusca';
fusca.preco = 1000;
// Usar Pascal Case, ou seja, começar com letra maiúscula.

// new Keyword
// A palavra chave new é responsável por criar um novo onjeto baseado na função que passarmos a frente dela.
// 1 Cria um novo objeto
/* honda = {}; */

// 2 Define o protótipo
/* honda.prototype = Carro.prototype; */

// 3 Aponta a variável this para o objeto
/* this = honda; */

// 4 Executa a função, substituindo this peloobjeto
/* honda.marca = 'Marca';
honda.preco = 0; */

// 5 Retorna o novo objeto
/* return honda = {
    marca: 'Marca',
    preco: 0,
} */

// Parâmetros e Argumentos
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.
function Carro2(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const chevrolet = new Carro2('Chevrolet', 10000);
const citroen = new Carro2('Citroen', 8000);

// this Keyword
// O this faz referência ao próprio objeto construído com a Constructor Function.
function Carro3(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
}

const mcLauren = new Carro3('McLauren', 100000);
// Variáveis dentro da Constructor estão "protegidas".

// Exemplo Real
// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add('ativo');
        return console.log('ativado');
    },
}

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul

// Constructor Function Real
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
function DomReal() {
    this.seletor = 'li';
    const element = document.querySelector(this.seletor);
    this.ativo = function() {
        element.classList.add('ativo');
        return console.log('ativado com sucesso');
    };
}

const lista = new DomReal();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new DomReal();
lastLi.seletor = 'li:last-child';
lastLi.ativo();

// Lembre-se de usar parâmetros
function DomReal2(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
        element.classList.add(classe);
        return console.log('successful');
    };
}

const lista2 = new DomReal2('ul');
lista2.ativo('ativo');

const lastLi2 = new DomReal2('li:last-child');
lastLi2.ativo('ativo');