angular.module("users").controller("usersCtrl", function ($scope, contatosAPI) {
	$scope.app = "Nossos profissionais";
	$scope.clientPhone = "";
	$scope.contatos = [];

	var carregarContatos = function () {
		contatosAPI.getContatos().success(function (data) {
			$scope.contatos = data;
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.sendMsg = function (phoneClient, contatoEmail) {
		console.info(phoneClient +"Enviado para "+ contatoEmail);
	};

	carregarContatos();
});