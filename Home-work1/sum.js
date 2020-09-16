var sum = function add(x) {
    var count = 0;
    function f(x) {
        if (x === undefined) {
            return count;
        } else {
            count = count + x;
            return f;
        }
    }
    return f(x);
};

console.log(sum(1)(2)(11)());
