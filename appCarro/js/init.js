window.onload = init;

function loadScript(url, callback){
  var script = document.createElement('script');
  script.src = url;
  if (callback!==undefined) {
    script.addEventListener('load', callback);
  }
  var local = document.getElementsByTagName('script')[0].parentNode;
  local.appendChild(script);
}

function init(){
  loadScript('lib/jquery/dist/jquery.min.js', function(){
    loadScript('lib/bootstrap/dist/js/bootstrap.min.js');
  });
  loadScript('../appCarro/js/Utils.js', function(){
    loadScript('../appCarro/js/entity/Simulacao.js');
    loadScript('../appCarro/js/entity/Carro.js');
    loadScript('../appCarro/js/geoLocation.js');
    loadScript('../appCarro/js/sistemaCarro.js', function() {
      AppCarro.init();
    });
  });
}