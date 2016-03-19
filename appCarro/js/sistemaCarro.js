
var AppCarro = function SistemaCarro(){

  var app = {};
  function novoCarro(event){
    //console.log('Alguém clicou no botão!')
    //console.log(event);
    var carro = new Carro(
      document.getElementById('fabricante').value,
      document.getElementById('modelo').value,
      document.getElementById('ano').value,
      document.getElementById('cor').value,
      document.getElementById('placa').value
      );
    carros.push(carro);
    console.log('Adicionando ' + carro.toString());
    console.log(carros);
    adicionaCarroALista(carro);
    event.preventDefault();
  }

  function novaSimulacao(event){
    var simulacao = new Simulacao(
        document.getElementById('codigoCarro').value,
        document.getElementById('nomeCliente').value,
        document.querySelector('.opcaoSimulacao:checked').value,
        document.getElementById('dataInicio').value,
        document.getElementById('dataTermino').value,
        document.getElementById('origem').value,
        document.getElementById('destino').value
    );

    simulacoes.push(simulacao);
    console.log('Adicionando ' + simulacao.toString());
    console.log(simulacoes);
    adicionarSimulacaoALista(simulacao);
    event.preventDefault();
  }

  function adicionarSimulacaoALista(simulacao) {
    var li = document.createElement('li');
    li.textContent = simulacao.toString();
    var lista = document.getElementById('listaSimulacao');
    lista.appendChild(li);
  }

  function adicionaCarroALista(carro) {
    var li = document.createElement('li');
    li.textContent = carro.toString();
    var lista = document.getElementById('lista');
    lista.appendChild(li);
  }

  function validaCharsPlaca(event){
    //console.log(event);
    //console.log(event.keyCode);
    var inputPlaca = document.getElementById('placa');
    inputPlaca.value = inputPlaca.value.replace(/[^a-z0-9]/gmi,'');
  }

  function desativarValidacaoDaPlaca() {
    var inputPlaca = document.getElementById('placa');
    inputPlaca.removeEventListener('keyup', function(){
      var inputPlaca = document.getElementById('placa');
      inputPlaca.value = inputPlaca.value.replace(/[^a-z0-9]/gmi,'');
    }, false);
  }

  var carros = [];
  var simulacoes = [];

  function init() {
    var btnAdicionar = document.getElementById('btnAdicionar');
    btnAdicionar.addEventListener('click', novoCarro);

    var btnAdicionarSimulacao = document.getElementById('btnAdicionarSimulacao');
    btnAdicionarSimulacao.addEventListener('click', novaSimulacao);

    var inputPlaca = document.getElementById('placa');
    inputPlaca.addEventListener('keyup', function(){
      var inputPlaca = document.getElementById('placa');
      inputPlaca.value = inputPlaca.value.replace(/[^a-z0-9]/gmi,'');
    }, false);

    var inputDesativar = document.getElementById('desativaValPlaca');
    inputDesativar.addEventListener('click', desativarValidacaoDaPlaca);
  };

  app.init =  function() {
      console.log('AppCarro.init');
    init();
    };
  app.getCatalog = function() {
      console.log('AppCarro.getCatalog');
      return carros;
    };

  return app;

}();
