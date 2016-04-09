
var AppCarro = function SistemaCarro(){

  var app = {};
  var Storage = window.localStorage;

  function novoCarro(event){
    var carro = new Carro(
      document.getElementById('fabricante').value,
      document.getElementById('modelo').value,
      document.getElementById('ano').value,
      document.getElementById('cor').value,
      document.getElementById('placa').value
    );

    carros.push(carro);
    Storage.setItem('carrosList', JSON.stringify(carros));
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
      Util.replaceWithData(copia, carro);
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
      Util.replaceWithData(copia, simulacao);
      var lista = document.getElementById('listaSimulacao');
      lista.appendChild(copia);
    }
  }

  function validaCharsPlaca(event){
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

    var carrosLst = Storage.getItem('carrosList');
    if (carrosLst !== null) {
      carros = JSON.parse(carrosLst);
      imprimirListaCarro();
    } else {
      carros = [];
    }

    var btnAdicionar = document.getElementById('btnAdicionar');
    btnAdicionar.addEventListener('click', novoCarro);

    var btnAdicionarSimulacao = document.getElementById('btnAdicionarSimulacao');
    btnAdicionarSimulacao.addEventListener('click', novaSimulacao);

    var btnTrajeto = document.getElementById('opcaoKm');
    btnTrajeto.addEventListener('click', getLocation);

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
