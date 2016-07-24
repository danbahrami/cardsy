import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiryString should reject invalid year values", assert => {
    //Arrange
    let isTooLongYearValid, isNegativeYearValid
    const tooLongYear = "12 / 100"
    const negativeYear = "12 / -1"

    //Act
    isTooLongYearValid = validate.expiryString(tooLongYear, " / ")
    isNegativeYearValid = validate.expiryString(negativeYear, " / ")

    //Assert
    assert.equal(isTooLongYearValid, false, "Returns false when year value > 99")
    assert.equal(isNegativeYearValid, false, "Returns false when year value < 0")

    assert.end()
})