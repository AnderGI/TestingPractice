import { Calculator } from "../functions/calculator";
const obj = new Calculator()

test('Sum', () => {
    expect(obj.add(2, 5)).toEqual(7);
})

test('Divide', () => {
    expect(obj.divide(1, 3)).toBeLessThan(0.3334);
})

test('Subtract', () => {
    expect(obj.subtract(2, 9)).toEqual(-7);
})

test('Multiply', () => {
    expect(obj.multiply(3,3)).toEqual(9);
})