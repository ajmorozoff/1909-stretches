const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply(1, false)).toThrow();

    expect(() => multiply('a', 2)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    let product = multiply(3, 4);
    expect(typeof product).toBe('number');

    // test that the returned value is correct
    expect(product).toBe(12);

    // test some other values
    let product2 = multiply(-2, 3);
    expect(product2).toBe(-6);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    let num1arr = [];
    let num2arr = [];
    let productArr = [];
    for (let i = 0; i < 100; i++) {
      const n1 = Math.random() * 10;
      const n2 = Math.random() * 10;
      num1arr.push(n1);
      num2arr.push(n2);
      productArr.push(n1 * n2);
    }
    for (let j = 0; j < 100; j++) {
    expect(multiply(num1arr[j], num2arr[j])).toBe(productArr[j]);
    }
  });
});
