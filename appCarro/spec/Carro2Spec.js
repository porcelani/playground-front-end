describe("Carro2", function() {
    var carro2;

    beforeEach(function() {
        carro2 = new Carro2();
    });

    it("should be able start Carro", function() {
        expect(carro2.ligar()).toEqual("Carro Ligado");
    });

});
