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