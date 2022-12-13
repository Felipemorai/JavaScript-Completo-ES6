// Arrays e Loops
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

// Break
// O loop irá parar caso encontre a palavra break
var videoGames2 = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var i = 0; i < videoGames2.length; i++) {
    console.log(videoGames2[i]);
    if(videoGames2[i] === 'PS4') {
        break;
    }
}

// forEach
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames3 = ['Switch', 'PS4', 'Xbox', '3DS'];
videoGames3.forEach(function(item) {
    console.log(item);
});
// O argumento item será atribuido dinamicamente

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array) {
    console.log(fruta, index, array);
});