const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

//console.log(capitalize("hola"))

const reverseString = (string) => {
  return string.split("").reverse().join("");
};
//console.log(reverseString("hola"))

class Calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  divide(x, y) {
    return x / y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const calculator = new Calculator();
// console.log(calculator.add(2, 5))
// console.log(calculator.subtract(2, 5))
// console.log(calculator.divide(2, 5))
// console.log(calculator.multiply(2, 5))

const encript = (character) => {
  const charToNum = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    ñ: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  return character === " " ? " " : (charToNum[character] + 1) % 27;
};

const decript = (character) => {
  const charToNum = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    ñ: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  return character === " " ? " " : (charToNum[character] - 1) % 27;
};
const encriptedCharacter = (num) => {
  const charToNum = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return num === " " ? " " : charToNum[num === 27 ? 0 : num];
};

const ceaserCipher = (string) => {
  const charArray = string.split("");
  const encriptedArray = [];
  const decriptedArray = [];

  for (let char of charArray) {
    encriptedArray.push(encript(char.toLowerCase()));
  }

  for (let num of encriptedArray) {
    decriptedArray.push(encriptedCharacter(num));
  }
  return decriptedArray.join("");
};

const analyzeArray = (array) => {
  const avg = array.reduce((acc, curr) => acc + curr, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average: avg,
    min,
    max,
    length,
  };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
