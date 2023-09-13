/*
A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
Each of these functions should take two numbers and return the correct calculation.
*/

const addMethod = (num1, num2) => ({
  add() {
    return num1 + num2;
  },
});

const subtractMethod = (num1, num2) => ({
  subtract() {
    return num1 - num2;
  },
});

const divideMethod = (num1, num2) => ({
  divide() {
    return num1 / num2;
  },
});

const multiplyMethod = (num1, num2) => ({
  multiply() {
    return num1 * num2;
  },
});

const listOfMethods = [addMethod, subtractMethod, divideMethod, multiplyMethod];

const addMethods = (num1, num2) => {
  let methods = {};
  for (const method of listOfMethods) {
    Object.assign(methods, method(num1, num2));
  }
  return methods;
};

export const Calculator = (num1, num2) => {
  return Object.assign({}, addMethods(num1, num2));
};
