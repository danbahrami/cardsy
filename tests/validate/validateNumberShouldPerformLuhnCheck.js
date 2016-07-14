import test from "tape"
import validate from "../../src/validate"

test("card.validate.number should perform Luhn check", assert => {
    //Arrange
    let isValid
    let invalidVisaNumber = "4242 4242 4242 4243"

    //Act
    isValid = validate.number(invalidVisaNumber)

    //Assert
    assert.equal(isValid, false, "Rejects VISA card number that fails Luhn check")

    assert.end()
})