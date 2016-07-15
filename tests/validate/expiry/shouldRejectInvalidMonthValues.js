import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiry should reject invalid month values", assert => {
    //Arrange
    let isTooHighMonthValid, isTooLowMonthValid
    const year = "99"
    const tooHighMonth = 13
    const tooLowMonth = 0

    //Act
    isTooHighMonthValid = validate.expiry(tooHighMonth, year)
    isTooLowMonthValid = validate.expiry(tooLowMonth, year)

    //Assert
    assert.equal(isTooHighMonthValid, false, "Returns false when month value > 12")
    assert.equal(isTooLowMonthValid, false, "Returns false when month value < 1")

    assert.end()
})