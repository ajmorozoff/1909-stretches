function times(n) {
    if (typeof n != 'number') {
        throw 'Numbers only!';
    }
    return function(m) {
        return m * n;
    }
}

module.exports = { times };
