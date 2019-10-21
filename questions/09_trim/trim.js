const trim = (obj) => {
    let newobj = {};
    Object.keys(obj).forEach(key => {
        //let val = obj[key];
        if (obj[key]) {
            newobj[key] = obj[key];
        }
        else if (obj[key] === 0 || obj[key] === false) {
            newobj[key] = obj[key];
        }
    })
    return newobj;
};

module.exports = { trim };
