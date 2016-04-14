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
    var carrosList = Storage.getItem('carrosList');
    if (carrosList !== null) {
      carros = JSON.parse(carrosList);
    } else {
      carros = [];
    }
    var lista = document.getElementById('lista');
    lista.textContent = '';

    var optionsCarro = document.getElementById('codigoCarro');
    limparOpcoesCarro(optionsCarro);
    for (var i = 0; i < carros.length; i++) {
      var carro = carros[i];
      var modelo = document.getElementById('modeloInformacaoCarro');
      var copia = modelo.content.firstElementChild.cloneNode(true);
      Util.replaceWithData(copia, carro);
      copia.setAttribute('data-codigo',carro.codigoCarro);

      var btnExcluir = copia.querySelector('.btrExluirCarro');
      btnExcluir.addEventListener('click', function(ev){
          var codigo=parseInt(ev.target.parentNode.parentNode.getAttribute('data-codigo'));
          excluirCarro(codigo);
      });

      var lista = document.getElementById('lista');
      lista.appendChild(copia);

      var option = document.createElement('option');
      option.setAttribute('value', carro.codigoCarro);
      option.innerText = carro.codigoCarro + ' - '+ carro.modelo;
      optionsCarro.appendChild(option);
    }
  }

    function excluirCarro(codigo){
        carrosList = carros.filter(function(element){
            if (element.codigoCarro===codigo) {
                return false;
            } else {
                return true;
            }
        });
        Storage.setItem('carrosList',JSON.stringify(carrosList));
        imprimirListaCarro();
    }

  function excluirSimulacao(codigo){
    simulacoesList = simulacoes.filter(function(element){
      if (element.idSimulacao===codigo) {
        return false;
      } else {
        return true;
      }
    });
    Storage.setItem('simulacaoList',JSON.stringify(simulacoesList));
    imprimirListaSimulacao();
  }

    function imprimirListaSimulacao() {

      var simulacaoLst = Storage.getItem('simulacaoList');
      if (simulacaoLst !== null) {
        simulacoes = JSON.parse(simulacaoLst);
      } else {
        simulacoes = [];
      }

      var lista = document.getElementById('listaSimulacao');
      lista.textContent = '';
      for (var i = 0; i < simulacoes.length; i++) {
        var simulacao = simulacoes[i];
        var modelo = document.getElementById('modeloInformacaoSimulacao');
        var copia = modelo.content.firstElementChild.cloneNode(true);
        Util.replaceWithData(copia, simulacao);

        copia.setAttribute('data-codigo',simulacao.idSimulacao);

        var btnExcluir = copia.querySelector('.btrExluirSimulacao');
        btnExcluir.addEventListener('click', function(ev){
          var codigo=parseInt(ev.target.parentNode.parentNode.getAttribute('data-codigo'));
          excluirSimulacao(codigo);
        });

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
  };

  function esconderTabCarro() {
    managerCarro.setAttribute('style', 'display: none');
    managerSimulacao.setAttribute('style', 'display: inherit');
  }

  function esconderTabSimulacao() {
    managerSimulacao.setAttribute('style', 'display: none');
    managerCarro.setAttribute('style', 'display: inherit');
  }

  function esconderOpcoesTrajeto() {
    opcoesPeriodo.setAttribute('style', 'display: inherit');
    opcoesKm.setAttribute('style', 'display: none');
  }

  function esconderOpcoesPeriodo() {
    opcoesPeriodo.setAttribute('style', 'display: none');
    opcoesKm.setAttribute('style', 'display: inherit');
  }

  function clickOpcaoTrajeto() {
    esconderOpcoesPeriodo();
    getLocation();
  }

  function adicionarEventoClick(objeto, funcao) {
    objeto.addEventListener('click', funcao);
  }

  var carros = [];
  var simulacoes = [];
  var managerCarro;
  var managerSimulacao;
  var opcoesPeriodo;
  var opcoesKm;
  function init() {
    managerCarro = document.getElementById('managerCarro');
    managerSimulacao = document.getElementById('manager-Simulacao');
    opcoesPeriodo = document.getElementById('opcoesPeriodo');
    opcoesKm = document.getElementById('opcoesKm');

    esconderOpcoesTrajeto();

    imprimirListaCarro();
    imprimirListaSimulacao();

    adicionarEventoClick(document.getElementById('btnAdicionar'), novoCarro)
    adicionarEventoClick(document.getElementById('btnAdicionarSimulacao'), novaSimulacao)
    adicionarEventoClick(document.getElementById('opcaoDias'), esconderOpcoesTrajeto)
    adicionarEventoClick(document.getElementById('opcaoKm'), clickOpcaoTrajeto)
    adicionarEventoClick(document.getElementById('desativaValPlaca'), desativarValidacaoDaPlaca)
    adicionarEventoClick(document.getElementById('carroTab'), esconderTabSimulacao)
    adicionarEventoClick(document.getElementById('simulacaoTab'), esconderTabCarro)

    var inputPlaca = document.getElementById('placa');
    inputPlaca.addEventListener('keyup', function(){
      var inputPlaca = document.getElementById('placa');
      inputPlaca.value = inputPlaca.value.replace(/[^a-z0-9]/gmi,'');
    }, false);


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
