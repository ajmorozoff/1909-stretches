// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const numbers = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
}

const letters = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l',
  12: 'm',
  13: 'n',
  14: 'o',
  15: 'p',
  16: 'q',
  17: 'r',
  18: 's',
  19: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z'
}

const encryptString = (str, shift) => {
  let tmp = [...str];
  let _length = tmp.length;

  let encrypted = tmp
  .map(char => {
    let _char = char.toLowerCase();
    let upper = false;
    if (char === char.toUpperCase()) {
      upper = true;
    }
    if (Object.values(letters).includes(_char)) {
      if (letters.indexOf(char) + shift > _length) {
        let idx = letters.indexOf(char) + shift + 1 - _length;
      }
      let shifted = letters[letters.indexOf(char) + shift];
      if (upper) {
        return shifted.toUpperCase();
      }
      return shifted;
    }
    
  })
  .join('');
  return encrypted;
};

module.exports = { encryptString };
