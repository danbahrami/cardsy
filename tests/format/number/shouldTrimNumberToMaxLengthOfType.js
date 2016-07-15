import test from "tape"
import format from "../../../src/format"

test("cardsy.format.number should trim number to max valid length for card type", assert => {
    //Arrange
    let formattedVisaNumber, formattedAmexNumber
    const tooLongVisaNumber = "42424242424242429"
    const tooLongAmexNumber = "3400000000000098"

    //Act
    formattedVisaNumber = format.number(tooLongVisaNumber)
    formattedAmexNumber = format.number(tooLongAmexNumber)

    //Assert
    assert.equal(formattedVisaNumber, "4242 4242 4242 4242", "Strips VISA card to 16 digits")
    assert.equal(formattedAmexNumber, "340 00000 0000009", "Strips AMEX card to 15 digits")

    assert.end()
})