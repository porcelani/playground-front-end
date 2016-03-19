
var AppCarro = function SistemaCarro(){

  var app = {};
  function novoCarro(event){
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
    imprimirListaCarro();
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
    imprimirListaSimulacao();
    event.preventDefault();
  }

  function imprimirListaCarro() {
    var lista = document.getElementById('lista');
    lista.textContent = '';
    for (var i = 0; i < carros.length; i++) {
      var carro = carros[i];
      var modelo = document.getElementById('modeloInformacaoCarro');
      var copia = modelo.content.firstElementChild.cloneNode(true);
      copia.querySelector('.fabricante').textContent = carro.fabricante;
      copia.querySelector('.modelo').textContent = carro.modelo;
      copia.querySelector('.ano').textContent = carro.ano;
      copia.querySelector('.placa').textContent = carro.placa;
      copia.querySelector('.cor').textContent = carro.cor;

      var lista = document.getElementById('lista');
      lista.appendChild(copia);
    }
  }

  function imprimirListaSimulacao() {
    var lista = document.getElementById('listaSimulacao');
    lista.textContent = '';
    for (var i = 0; i < simulacoes.length; i++) {
      var simulacao = simulacoes[i];
      var modelo = document.getElementById('modeloInformacaoSimulacao');
      var copia = modelo.content.firstElementChild.cloneNode(true);
      copia.querySelector('.codigoCarro').textContent = simulacao.codigoCarro;
      copia.querySelector('.nomeCliente').textContent = simulacao.nomeCliente;
      copia.querySelector('.opcao').textContent = simulacao.opcao;
      copia.querySelector('.dataInicio').textContent = simulacao.dataInicio;
      copia.querySelector('.dataTermino').textContent = simulacao.dataTermino;
      copia.querySelector('.origem').textContent = simulacao.origem;
      copia.querySelector('.destino').textContent = simulacao.destino;

      var lista = document.getElementById('listaSimulacao');
      lista.appendChild(copia);
    }
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
