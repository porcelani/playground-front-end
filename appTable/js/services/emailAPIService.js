angular.module("users").factory("emailAPI", function ($http, config) {

	var _saveEmail = function (msg) {
		return $http.post(config.baseUrl + "/projeto-ar-condicionado-web/rest/email", msg);
	};

	return {
		saveEmail: _saveEmail
	};
});