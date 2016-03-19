var palavra = 'thiago';
tamanho = palavra.length;
var inversoPalavra = '';
for (var i=0; i<tamanho; i++) {
    inversoPalavra += palavra[tamanho-1-i];
}
if (palavra === inversoPalavra) {
  console.log(palavra + ' é um palíndromo!');
} else {
  console.log(palavra + ' não é um palíndromo, pois, seu inverso é: ' + inversoPalavra);
}
