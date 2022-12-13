// Array
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0]; // Switch
videoGames[2]; // Xbox

// Métodos e Propriedades de uma Array
var ultimoItem = videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final do array
videoGames.length; // 3
// Existem diversos outros métodos, como map, reduce, forEach