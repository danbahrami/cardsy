import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.number should validate integer", assert => {
    //Arrange
    let validNumberType, invalidNumberType
    let validVisaNumber = 4242424242424242
    let invalidVisaNumber = 4242

    //Act
    validNumberType = validate.number(validVisaNumber)
    invalidNumberType = validate.number(invalidVisaNumber)

    //Assert
    assert.equal(validNumberType, true, "Returns true if a valid card number is passed as an integer")
    assert.equal(invalidNumberType, false, "Returns false if an invalid card number is passed as an integer")

    assert.end()
})