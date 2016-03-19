var execucoes = 0;

var fibonacci = function (n){
  execucoes++;
  console.log(execucoes);
  if (n<2) {
    return n;
  } else {
    return fibonacci(n-1)+fibonacci(n-2);
  }
}

for (var i=1; i<=10; i++) {
    console.log('\nResultado para ' + i +': '+fibonacci(i) + '\n\n');
    execucoes = 0;
}
