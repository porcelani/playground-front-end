'use strict';

class Car {

    start() {

        return new Promise(function (resolve, reject) {
            // do a thing, possibly async, then…
            console.log("Enter in Car")
            console.log("Starting the Car")

            setTimeout(function () {
                resolve("Started!");
            }, 5000);

        });
    }
}
        // https://developers.google.com/web/fundamentals/getting-started/primers/promises
        // var promise = new Promise(function(resolve, reject) {
        //     // do a thing, possibly async, then…
        //
        //     if (/* everything turned out fine */) {
        //         resolve("Stuff worked!");
        //     }
        //     else {
        //         reject(Error("It broke"));
        //     }
        // });