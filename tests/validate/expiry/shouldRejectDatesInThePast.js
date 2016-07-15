import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiry should reject dates in the past", assert => {
    //Arrange
    let isPastMonthValid, isPastYearValid
    const now = new Date()
    const currentMonth = now.getMonth() + 1
    const currentYear = now.getFullYear()
    const pastMonth = currentMonth - 1
    const pastYear = currentYear - 1

    //Act
    isPastMonthValid = validate.expiry(pastMonth, currentYear)
    isPastYearValid = validate.expiry(currentMonth, pastYear)

    //Assert
    assert.equal(isPastMonthValid, false, "Returns false when expiry is current year but in a past month")
    assert.equal(isPastYearValid, false, "Returns false when expiry is in a past year")

    assert.end()
})