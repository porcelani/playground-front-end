/**
 * Created by Edlaine on 19/03/16.
 */
var idSimulacao = 0;

function Simulacao(codigoCarro, nomeCliente, opcao, dataInicio, dataTermino, origem, destino){
    idSimulacao++;

    this.idSimulacao = idSimulacao;
    this.codigoCarro = codigoCarro;
    this.nomeCliente = nomeCliente;
    this.opcao = opcao;
    this.dataInicio = dataInicio;
    this.dataTermino = dataTermino;
    this.origem = origem;
    this.destino = destino;

    this.printDados = function(){
        return this.idSimulacao + ' ' + this.codigoCarro + ' ' + this.nomeCliente + ' ' + this.opcao + ' ' +
            this.dataInicio + ' ' + this.dataTermino + ' ' + this.origem + ' ' + this.destino;
    }
}