import { Calculator } from "../utils/calculator.js";
/*
A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
Each of these functions should take two numbers and return the correct calculation.
*/

const num1 = 2;
const num2 = 3;
describe("Calculator", () => {
  const calculator = Calculator(num1, num2);
  //ADD METHOD
  describe("Add Method", () => {
    const result = calculator.add(num1, num2);
    test("Returns a number", () => {
      expect(result).toBeInstanceOf("number");
    });
    test("Returns the sum of all numbers", () => {
      expect(result).toBe(num1 + num2);
    });
  });
  //SUBTRACT METHOD
  describe("Subtract Method", () => {
    const result = calculator.subtract(num1, num2);
    test("Returns a number", () => {
      expect(result).toBeInstanceOf("number");
    });
    test("Returns the result of subtracting num2 from num1", () => {
      expect(result).toBe(num1 - num2);
    });
  });
  //DIVIDE METHOD
  describe("Divide Method", () => {
    const result = calculator.divide(num1, num2);
    test("Returns a number", () => {
      expect(result).toBeInstanceOf("number");
    });
    test("Returns the division of num1 and num2", () => {
      expect(result).toBe(num1 / num2);
    });
  });
  //MULTIPLY METHOD
  describe("Multiply Method", () => {
    const result = calculator.multiply(num1, num2);
    test("Returns a number", () => {
      expect(result).toBeInstanceOf("number");
    });
    test("Returns the multiplication of num1 and num2", () => {
      expect(result).toBe(num1 * num2);
    });
  });
});
