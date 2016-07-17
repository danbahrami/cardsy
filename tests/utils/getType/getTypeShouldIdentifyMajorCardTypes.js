import test from "tape"
import card from "../../../src/utils/cardUtils"

test("cardsy.getType should identify major card types", assert => {
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
    amex = card.getType("34")
    dankort = card.getType("5019")
    dinersclub = card.getType("3000")
    discover = card.getType("6011")
    jcb = card.getType("3528")
    laser = card.getType("6706")
    maestro = card.getType("6759")
    mastercard = card.getType("5454")
    unionpay = card.getType("62")
    visaelectron = card.getType("4026")
    visa = card.getType("4")

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