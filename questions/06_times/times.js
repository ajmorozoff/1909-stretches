function times(n) {
    try {
        if (typeof n != 'number') {
            throw 'Numbers only!';
        }
        return function(m) {
            return m * n;
        }
    }
    catch (e) {
        return e;
    }
}

module.exports = { times };
