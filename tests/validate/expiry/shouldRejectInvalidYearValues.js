import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiry should reject invalid year values", assert => {
    //Arrange
    let isTooLongYearValid, isNegativeYearValid
    const month = 6
    const tooLongYear = 100
    const negativeYear = -1

    //Act
    isTooLongYearValid = validate.expiry(month, tooLongYear)
    isNegativeYearValid = validate.expiry(month, negativeYear)

    //Assert
    assert.equal(isTooLongYearValid, false, "Returns false when year value > 99")
    assert.equal(isNegativeYearValid, false, "Returns false when year value < 0")

    assert.end()
})