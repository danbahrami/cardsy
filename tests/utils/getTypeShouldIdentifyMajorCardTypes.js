import test from "tape"
import getType from "../../src/utils/getType"

test("card.getType should identify major card types", assert => {
    //Arrange
    let amex,
        dankort,
        dinersclub,
        discover,
        jcb,
        laser,
        maestro,
        mastercard,
        unionpay,
        visaelectron,
        visa

    //Act
    amex = getType("34")
    dankort = getType("5019")
    dinersclub = getType("3000")
    discover = getType("6011")
    jcb = getType("3528")
    laser = getType("6706")
    maestro = getType("6759")
    mastercard = getType("5454")
    unionpay = getType("62")
    visaelectron = getType("4026")
    visa = getType("4")

    //Assert
    assert.equal(amex, "AMEX", "Identifies American Express")
    assert.equal(dankort, "DANKORT", "Identifies Dankort")
    assert.equal(dinersclub, "DINERSCLUB", "Identifies Diners club")
    assert.equal(discover, "DISCOVER", "Identifies Discover")
    assert.equal(jcb, "JCB", "Identifies JCB")
    assert.equal(laser, "LASER", "Identifies Laser")
    assert.equal(maestro, "MAESTRO", "Identifies Maestro")
    assert.equal(mastercard, "MASTERCARD", "Identifies Mastercard")
    assert.equal(unionpay, "UNIONPAY", "Identifies Union Pay")
    assert.equal(visaelectron, "VISAELECTRON", "Identifies Visa Electron")
    assert.equal(visa, "VISA", "Identifies Visa")

    assert.end()
})