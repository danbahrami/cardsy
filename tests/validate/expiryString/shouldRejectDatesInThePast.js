import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiryString should reject dates in the past", assert => {
    //Arrange
    let isPastMonthValid, isPastYearValid
    const now = new Date()
    const currentMonth = (now.getMonth() + 1).toString()
    const currentYear = (now.getFullYear()).toString()
    const pastMonth = (currentMonth - 1).toString()
    const pastYear = (currentYear - 1).toString()

    //Act
    isPastMonthValid = validate.expiryString(`${pastMonth} / ${currentYear}`, " / ")
    isPastYearValid = validate.expiryString(`${currentMonth} / ${pastYear}`, " / ")

    //Assert
    assert.equal(isPastMonthValid, false, "Returns false when expiry is current year but in a past month")
    assert.equal(isPastYearValid, false, "Returns false when expiry is in a past year")

    assert.end()
})