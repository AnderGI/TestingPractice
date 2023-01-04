const encript = (character) => {
    //Encript to numbers the original string
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
    //decript the encripted string to its original one
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
    //get the encripted characters regarding to 
    //the values of the character of the original
    //strring
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
  
 export const ceaserCipher = (string) => {
    const charArray = string.split("");
    const encriptedCharToNum = [];
    const encriptedNumToNewChar = [];
  
    for (let char of charArray) {
      encriptedCharToNum.push(encript(char.toLowerCase()));
    }
  
    for (let num of encriptedCharToNum) {
      encriptedNumToNewChar.push(encriptedCharacter(num));
    }
    return encriptedNumToNewChar.join("");
  };

  console.log(ceaserCipher("defend the east wall of the castle"))