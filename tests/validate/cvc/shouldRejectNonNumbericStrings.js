import test from "tape"
import validate from "../../../src/validate"

test("card.validate.cvc should return false if cvc is a non-numeric string", assert => {
    //Arrange
    let isEmptyValid, isWhiteSpaceValid, isAlphaValid
    let type = "VISA"

    //Act
    isEmptyValid = validate.cvc("", type)
    isWhiteSpaceValid = validate.cvc("   ", type)
    isAlphaValid = validate.cvc("abc", type)

    //Assert
    assert.equal(isEmptyValid, false, "Returns false if empty string is passed")
    assert.equal(isWhiteSpaceValid, false, "Returns false if white space is passed")
    assert.equal(isAlphaValid, false, "Returns false if alphabetic chars are passed")

    assert.end()
})