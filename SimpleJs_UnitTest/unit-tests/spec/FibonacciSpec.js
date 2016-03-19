describe("Fibonacci", function() {
  var fibonacci;

  beforeEach(function() {
    fibonacci = new Fibonacci();
  });

  it("Sequence with 0 elements", function() {
    expect(fibonacci.getSequence(0)).toEqual(0);
  });

  it("Sequence with 1 elements", function() {
    expect(fibonacci.getSequence(1)).toEqual(1);
  });

  it("Sequence with 2 elements", function() {
    expect(fibonacci.getSequence(2)).toEqual(1);
  });

  it("Sequence with 3 elements", function() {
    expect(fibonacci.getSequence(3)).toEqual(2);
  });

  it("Sequence with 4 elements", function() {
    expect(fibonacci.getSequence(4)).toEqual(3);
  });

  it("Sequence with 5 elements", function() {
    expect(fibonacci.getSequence(5)).toEqual(5);
  });

  it("Sequence with 6 elements", function() {
    expect(fibonacci.getSequence(6)).toEqual(8);
  });

  it("Sequence with 7 elements", function() {
    expect(fibonacci.getSequence(7)).toEqual(13);
  });

  it("Sequence with 8 elements", function() {
    expect(fibonacci.getSequence(8)).toEqual(21);
  });

  it("Sequence with 9 elements", function() {
    expect(fibonacci.getSequence(9)).toEqual(34);
  });

  it("Sequence with 10 elements", function() {
    expect(fibonacci.getSequence(10)).toEqual(55);
  });

  it("Sequence without recursive with 1 elements", function() {
    expect(fibonacci.getSequenceWithoutRecursive(1)).toEqual(1);
  });

  it("Sequence without recursive with 2 elements", function() {
    expect(fibonacci.getSequenceWithoutRecursive(2)).toEqual(1);
  });

  it("Sequence without recursive with 10 elements", function() {
    expect(fibonacci.getSequenceWithoutRecursive(10)).toEqual(55);
  });

});
