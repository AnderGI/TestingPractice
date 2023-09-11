import { capitalize } from '../utils/capitalize.js';
descibe('Capitalize function test', () => {
    const capitalizedString = capitalize('hola')
    const charArray = capitalizedString.split('') 
    test('Capitalize function returns a string', () => {
        expect(capitalizedString).toBeInstaceOf("string")
    })
    test('The first character is capitalized', () => {
        expect(charArray.shift()).toMatch(/[A-Z]/g)
    })
    test('The rest of the characters are lowercased', () => {
        expect(
            charArray.every(w => w.match(/[a-z]/g))
        ).toBe(true)
    })
})