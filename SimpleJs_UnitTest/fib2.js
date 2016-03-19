var execucoes = 0;

var fibonacci = function (){
  var tabela = [0,1];
  var fibInterna = function(n){
    execucoes++;
    console.log(execucoes);
    var resultado = tabela[n];
    if (resultado==undefined) {
      // calcular
      resultado = fibInterna(n-1) + fibInterna(n-2);
      tabela[n] = resultado;
    }
    return resultado;
  }
  return fibInterna;
}();

var i = 100;
console.log('\nResultado para ' + i +': '+fibonacci(i) + '\n\n');

/*for (var i=1; i<=10; i++) {
    console.log('\nResultado para ' + i +': '+fibonacci(i) + '\n\n');
    execucoes = 0;
}*/
