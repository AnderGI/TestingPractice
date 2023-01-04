import { reverseString } from "../functions/reverseString";
test('good reversed string', () => {
    expect(reverseString("hola")).toMatch("aloh");
})

test('good reversed phrase', () => {
    expect(reverseString("hola a todos como estais")).toMatch("siatse omoc sodot a aloh");
})