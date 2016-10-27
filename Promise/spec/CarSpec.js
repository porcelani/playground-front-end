describe("Car", function () {
    var car;

    beforeEach(function () {
        car = new Car();
    });

    it("should be able to start the car", function () {
        car.start().then(function(result) {
            console.log(result); // "Stuff worked!"
        }, function(err) {
            console.log(err); // Error: "It broke"
        });
    });


});
