const multiply = require('./script')

describe("Mon scénario de test", () => {
    it("vrai est égale à vrai ?", () => {
        expect(true).toBe(true)
    })
    it("La muliplication est ok ?", () => {
        expect(multiply(2,5)).not.toBe(15)
    })

})