import {reverseString} from '../utils/reverseString.js'

describe('Reverse String function', () => {
    const data = reverseString('hola')
    test('It should return a string', () => {
        expect(data).toBeInstanceOf("string")
    })
    test('It should reverse the string', () => {
        const reversedData = data.split('').reverse().join('')
        expect(reversedData).toBe(data)
    })
})