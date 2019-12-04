class Calculator {
    constructor() {
       this.value = 0;
    }


    add(n) {
        this.value += n;
        return this;
    }

    subtract(n) {
        this.value -= n;
        return this;
    }
    divide(n) {
        if (n !== 0) {
            this.value = this.value / n;
        }
        return this;
    }
    multiply(n) {
        this.value = this.value * n;
        return this;
    }
    clear() {
        this.value = 0;
        return this;
    }
}

module.exports = { Calculator };
