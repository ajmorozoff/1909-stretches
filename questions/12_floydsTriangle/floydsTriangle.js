// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let arr = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += (++sum).toString();
        }
        str += '\n';
        console.log(str);
        arr.push(str);
    }
    return arr.join('');
};

module.exports = { floydsTriangle };
