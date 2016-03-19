/**
 Crie um Array igual ao abaixo e mostre apenas os nomes das pessoas
que tenham 4 letras.
var pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];
Dica: use o atributo length das Strings.
*/
var nomes = ["João", "José", "Maria", "Sebastião", "Antônio"];
for (var i=0; i<nomes.length; i++) {
  nome = nomes[i];
  if (nome.length===4) {
    console.log(nome);
  }
}
