import test from "tape"
import validate from "../../src/validate"

test("card.validate.number should validate number length", assert => {
    //Arrange
    let isTooShortValid, isTooLongValid, isJustRightValid
    let tooShort = "5454 5454 5454 545"
    let tooLong = "5454 5454 5454 5454 5"
    let justRight = "5454 5454 5454 5454 5"

    //Act
    isTooShortValid = validate.number(tooShort)
    isTooLongValid = validate.number(tooLong)
    isJustRightValid = validate.number(justRight)

    //Assert
    assert.equal(isTooShortValid, false, "Returns false if number if it's too short")
    assert.equal(isTooLongValid, false, "Returns false if number if it's too long")
    assert.equal(isJustRightValid, true, "Returns true if number length is just right")

    assert.end()
})