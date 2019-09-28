const { isEqual } = require('./isEqual');

/*
 **  These are tests! A test suite is wrapped in a `describe` block.
 **  Each individual test is wrapped in a `test` block.
 **  A test block can have many `expect` statements. This is where your
 **  code is determined to pass or fail the test.
 */

describe('isEqual compares 2 objects to see if they are equal', () => {
  test('it returns true for 2 empty objects', () => {
    expect(isEqual({}, {})).toBe(true);
  });

  test('it returns true for objects with the same keys and values', () => {
    expect(isEqual({ a: 2 }, { a: 2 })).toBe(true);
  });

  test('it returns false for objects with different keys and values', () => {
    debugger;
    expect(isEqual({ a: 2 }, { a: 1 })).toBe(false);
  });

  test('it returns false for objects with different keys and values', () => {
    expect(isEqual({ a: 2 }, { a: 2, b: 99 })).toBe(false);
  });

  test('it returns false for objects with different keys and values', () => {
    expect(isEqual({ a: 2, b: 99, c: 3 }, { a: 2, b: 99 })).toBe(false);
  });
});
