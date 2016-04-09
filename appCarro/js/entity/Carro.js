var codigoCarro = 0;

function Carro(fab, mod, ano, cor, pla, codigo){

    this.codigoCarro = codigo;
    this.fabricante = fab;
    this.modelo = mod;
    this.ano = ano;
    this.cor = cor;
    this.placa = (function(str){
        //return str.toUpperCase();
        return str;
    })(pla);

    this.toString = function(){
        return this.fabricante + ' ' + this.modelo + ' ' + this.ano + ' ' + this.cor + ' (' + this.placa + ')';
    }

    this.ligar = function(){
        return "Carro Ligado";
    }
}

//Padrão ECMA-6
//'use strict';
//
//class Carro2{
//...
//ligar(){
//    return "Carro Ligado";
//}
//}