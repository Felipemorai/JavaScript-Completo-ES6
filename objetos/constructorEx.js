// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }

  function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
  }

  const pessoa1 = new Pessoa('Felipe', 20);
  console.log(pessoa1);
  pessoa1.andar();

  const pessoa2 = new Pessoa('Maria', 40);
  console.log(pessoa2);
  pessoa2.andar();

  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const pessoa3 = new Pessoa('João', 20);
  console.log(pessoa3);
  pessoa3.andar();

  const pessoa4 = new Pessoa('Maria', 25);
  console.log(pessoa4);
  pessoa4.andar();

  const pessoa5 = new Pessoa('Bruno', 15);
  console.log(pessoa5);
  pessoa5.andar();
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  function Dom(seletor) {
    const elements = document.querySelectorAll(seletor);
    this.elements = elements;
    this.addClass = function(classe) {
        elements.forEach((item) => {
            item.classList.add(classe);
        });
    };
    this.removeClass = function(classe) {
        elements.forEach((item) => {
            item.classList.remove(classe);
        })
    };
  }

  const lista = new Dom('li');
  lista.addClass('ativo');
  lista.removeClass('ativo');
  