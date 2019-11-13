function cache(func) {
    if (typeof func !== 'function') {
        throw('Input must be a function.');
    }
    let argumentCache = [];
    return function(arg) {
        let obj = argumentCache.find(obj => obj.passed === arg)
        if (obj) {
            return obj.result;
        }
        else {
            let res = func(arg);
            argumentCache.push({passed: arg, result: res});
            return res;
        }
    }
}
module.exports = { cache };
