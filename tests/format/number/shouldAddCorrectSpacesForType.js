import test from "tape"
import format from "../../../src/format"

test("cardsy.format.number should add correct spaces for type", assert => {
    //Arrange
    let formattedVisaNumber, formattedAmexNumber
    const unformattedVisaNumber = "4242424242424242"
    const unformattedAmexNumber = "340000000000009"

    //Act
    formattedVisaNumber = format.number(unformattedVisaNumber)
    formattedAmexNumber = format.number(unformattedAmexNumber)

    //Assert
    assert.equal(formattedVisaNumber, "4242 4242 4242 4242", "Adds correct spaces to Visa number")
    assert.equal(formattedAmexNumber, "340 00000 0000009", "Adds correct spaces to Amex number")

    assert.end()
})