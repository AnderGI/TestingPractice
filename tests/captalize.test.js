import { capitalize } from "../functions/capitalize";

test('Capitalize first letter in word', () => {
    expect(capitalize("rainbow")).toMatch("Rainbow");
})
