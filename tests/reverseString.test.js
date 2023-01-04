import { reverseString } from "../functions/reverseString";
test('good reversed string', () => {
    expect(reverseString("hola")).toMatch("aloh");
})