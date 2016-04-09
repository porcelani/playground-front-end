
var AppCarro = function SistemaCarro(){

  var app = {};
  var Storage = window.localStorage;
  var codigoCarro = 0;
  var codigoSimulacao = 0;

  function novoCarro(event){
    codigoCarro++;
    var carro = new Carro(
      document.getElementById('fabricante').value,
      document.getElementById('modelo').value,
      document.getElementById('ano').value,
      document.getElementById('cor').value,
      document.getElementById('placa').value,
      codigoCarro
    );

    carros.push(carro);
    Storage.setItem('carrosList', JSON.stringify(carros));
    imprimirListaCarro();
    event.preventDefault();
  }

  function novaSimulacao(event){
    codigoSimulacao++;
    var select = document.getElementById('codigoCarro');
    var index = select.selectedIndex;
    var carroSelecionado = select[index];
    var carro = carroSelecionado.innerText;
    var simulacao = new Simulacao(
        carro,
        document.getElementById('nomeCliente').value,
        document.querySelector('.opcaoSimulacao:checked').value,
        document.getElementById('dataInicio').value,
        document.getElementById('dataTermino').value,
        document.getElementById('origem').value,
        document.getElementById('destino').value,
        ultimaDistanciaCalculada,
        codigoSimulacao
    );

    simulacoes.push(simulacao);
    Storage.setItem('simulacaoList', JSON.stringify(simulacoes));
    imprimirListaSimulacao();
    event.preventDefault();
  }

  function limparOpcoesCarro(selectbox) {
    var i;
    for(i=selectbox.options.length-1;i>=0;i--) {
      selectbox.remove(i);
    }
  }

  function imprimirListaCarro() {
    var lista = document.getElementById('lista');
    lista.textContent = '';

    var optionsCarro = document.getElementById('codigoCarro');
    limparOpcoesCarro(optionsCarro);
    for (var i = 0; i < carros.length; i++) {
      var carro = carros[i];
      var modelo = document.getElementById('modeloInformacaoCarro');
      var copia = modelo.content.firstElementChild.cloneNode(true);
      Util.replaceWithData(copia, carro);
      var lista = document.getElementById('lista');
      lista.appendChild(copia);

      var option = document.createElement('option');
      option.setAttribute('value', carro.codigoCarro);
      option.innerText = carro.codigoCarro + ' - '+ carro.modelo;
      optionsCarro.appendChild(option);
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
  };

  var inputDestino = document.getElementById('destino');
  inputDestino.addEventListener('blur', calcularDistancia);

  var ultimaDistanciaCalculada = null;
  function calcularDistancia(){
    var origem = document.getElementById('origem').value;
    var destino = document.getElementById('destino').value;
    if (destino === '') {
      return;
    }
    var directionsService = new google.maps.DirectionsService();
    var request = {
      origin      : origem,
      destination : destino,
      travelMode  : google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if ( status === google.maps.DirectionsStatus.OK ) {
        ultimaDistanciaCalculada = (response.routes[0].legs[0].distance.value)/1000;
        var distanciaLabel = document.getElementById('distanciaCalculada');
        distanciaLabel.innerText = ultimaDistanciaCalculada.toString().concat(' KM');
      }
    });
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

    var simulacaoLst = Storage.getItem('simulacaoList');
    if (simulacaoLst !== null) {
      simulacoes = JSON.parse(simulacaoLst);
      imprimirListaSimulacao();
    } else {
      simulacoes = [];
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
