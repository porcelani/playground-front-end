function Fibonacci() {

}
Fibonacci.prototype.getSequence = function (element) {
    if (element < 2)
        return element;

    return new Fibonacci().getSequence(element - 1) + new Fibonacci().getSequence(element - 2);
};

Fibonacci.prototype.getSequenceWithoutRecursive = function (element) {
    if (element < 2)
        return element;

    var cache = [0, 1];

    for (var i = 2; i <= element; i++)
        cache[i] = cache[i - 1] + cache[i - 2];

    return cache[element];
};
