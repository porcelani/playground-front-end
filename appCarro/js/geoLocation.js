
var resultado = null;

function getCity(GMapsResult) {
    var localidade="";
    if (GMapsResult.hasOwnProperty("results")) {
        for (var prop in GMapsResult.results) {
            if ((GMapsResult.results.hasOwnProperty(prop)) && (localidade==="")) {
                if (GMapsResult.results[prop].hasOwnProperty("address_components")) {
                    var address_components = GMapsResult.results[prop].address_components;
                    for (var prop2 in address_components) {
                        if ((address_components.hasOwnProperty(prop2)) && (localidade==="")) {
                            var address_components_details = address_components[prop2];
                            if (address_components_details.hasOwnProperty("types")) {
                                var indexForLocality = address_components_details.types.indexOf("locality");
                                if (indexForLocality>=0) {
                                    localidade = address_components_details.long_name;
                                }
                            }
                        }
                    }
                } else {
                    console.warn("não possui address_components");
                }
            }
        }
        return localidade;
    } else {
        console.error("Não há resultados válidos");
        return null;
    }

}

function getCountry(GMapsResult) {
    var country="";
    if (GMapsResult.hasOwnProperty("results")) {
        for (var prop in GMapsResult.results) {
            if ((GMapsResult.results.hasOwnProperty(prop)) && (country==="")) {
                if (GMapsResult.results[prop].hasOwnProperty("address_components")) {
                    var address_components = GMapsResult.results[prop].address_components;
                    for (var prop2 in address_components) {
                        if ((address_components.hasOwnProperty(prop2)) && (country==="")) {
                            var address_components_details = address_components[prop2];
                            if (address_components_details.hasOwnProperty("types")) {
                                var indexForLocality = address_components_details.types.indexOf("country");
                                if (indexForLocality>=0) {
                                    country = address_components_details.long_name;
                                }
                            }
                        }
                    }
                } else {
                    console.warn("não possui address_components");
                }
            }
        }
        return country;
    } else {
        console.error("Não há resultados válidos");
        return null;
    }

}

var options = {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 0
};

var successCallback = function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=false';
    var httpRequest = new XMLHttpRequest(url);
    httpRequest.open('GET', url);
    httpRequest.onreadystatechange = function() {
        window.alert(this);
        if (this.readyState === 4) {

            window.alert(resultado);
            window.alert(this.responseText);
            resultado = JSON.parse(this.responseText);
            console.log(getCity(resultado));
            console.log(getCountry(resultado));
        }
    };
};

var errorCallback = function(error){
    debugger;
    var errorMessage = 'Unknown error';
    switch(error.code) {
        case 1:
            errorMessage = 'Permission denied';
            break;
        case 2:
            errorMessage = 'Position unavailable';
            break;
        case 3:
            errorMessage = 'Timeout';
            break;
    }
    alert(errorMessage);
};

function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options);
};