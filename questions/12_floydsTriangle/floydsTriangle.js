// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let arr = [];
    let sum = 1;
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            row.push(sum);
            sum += 1;
        }
        arr.push(row.join(''));
    }
    return arr.join('\n');
};

module.exports = { floydsTriangle };
