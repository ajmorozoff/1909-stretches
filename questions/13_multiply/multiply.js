const multiply = (num1, num2) => {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        throw('number arguments only');
    }
    return num1 * num2;
};

module.exports = { multiply };
