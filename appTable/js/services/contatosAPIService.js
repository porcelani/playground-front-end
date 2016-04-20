angular.module("users").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "/projeto-ar-condicionado-web/rest/user");
	};

	return {
		getContatos: _getContatos
	};
});