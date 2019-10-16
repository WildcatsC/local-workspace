const sum = (n1, n2) => n1 + n2;
const mul = (n1, n2) => n1 * n2;

const VALUE = 100;

class cl {
    constructor() {
        console.log("new object created!")
    }
}

module.exports = { sum: sum, mul: mul, VALUE: VALUE, cl: cl };