import { ceaserCipher } from "../functions/caesarCipher"

test('encripted string', ()=> {
    expect(ceaserCipher("defend the east wall of the castle"))
    .toMatch("efgfñe uif fbtu xbmm pg uif dbtumf")
})