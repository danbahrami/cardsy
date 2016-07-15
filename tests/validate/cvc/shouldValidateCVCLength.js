import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.cvc should validate cvc length", assert => {
    //Arrange
    let isTooShortValid, isTooLongValid, isJustRightValid
    let tooShort = "12"
    let tooLong = "1234"
    let justRight = "123"
    let type = "VISA"

    //Act
    isTooShortValid = validate.cvc(tooShort, type)
    isTooLongValid = validate.cvc(tooLong, type)
    isJustRightValid = validate.cvc(justRight, type)

    //Assert
    assert.equal(isTooShortValid, false, "Returns false if the cvc is too short")
    assert.equal(isTooLongValid, false, "Returns false if the cvc is too long")
    assert.equal(isJustRightValid, true, "Returns true if the cvc is the right length")

    assert.end()
})