angular.module("users").controller("usersCtrl", function ($scope, contatosAPI,emailAPI) {
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

	$scope.sendMsg = function (msg, emailProfessional) {
		console.info(msg.clientPhone +" Enviado para "+ emailProfessional);

		msg.emailProfessional=emailProfessional;

		emailAPI.saveEmail(msg).success(function (data) {
			carregarContatos();
		});
	};

	carregarContatos();
});