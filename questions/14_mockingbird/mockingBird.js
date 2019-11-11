const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  let arr = [];
  while (n > 0) {
    const result = func();
    arr.push(result);
    --n;
  }
  return arr;
};

module.exports = { repeater };
