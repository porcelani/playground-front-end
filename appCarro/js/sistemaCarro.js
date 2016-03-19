function SistemaCarro(){

  function Carro(fab, mod, ano, cor, pla){
    this.fabricante = fab;
    this.modelo = mod;
    this.ano = ano;
    this.cor = cor;
    this.placa = (function(str){
        return str.toUpperCase();
    })(pla);
    this.toString = function(){
      return this.fabricante + ' ' + this.modelo + ' ' + this.ano + ' ' + this.cor + ' (' + this.placa + ')';
    }
  }

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

  var btnAdicionar = document.getElementById('btnAdicionar');
  btnAdicionar.addEventListener('click', novoCarro);

  var inputPlaca = document.getElementById('placa');
  inputPlaca.addEventListener('keyup', function(){
    var inputPlaca = document.getElementById('placa');
    inputPlaca.value = inputPlaca.value.replace(/[^a-z0-9]/gmi,'');
  }, false);

  var inputDesativar = document.getElementById('desativaValPlaca');
  inputDesativar.addEventListener('click', desativarValidacaoDaPlaca);

}
