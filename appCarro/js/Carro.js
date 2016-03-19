/**
 * Created by Edlaine on 19/03/16.
 */
/**
 * Created by Edlaine on 19/03/16.
 */
var codigoCarro = 0;

function Carro(fab, mod, ano, cor, pla){
    codigoCarro++;

    this.codigoCarro = codigoCarro;
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