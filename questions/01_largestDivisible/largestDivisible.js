/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
    let minimum = -Infinity;
    if (!arr.length) {
        return null;
    }
    let largest = arr.filter(x => x % num === 0).sort().pop();
    return (largest ? largest : null);
}

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };
