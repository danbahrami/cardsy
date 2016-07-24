import test from "tape"
import validate from "../../../src/validate"

test("cardsy.validate.expiryString should reject invalid month values", assert => {
    //Arrange
    let isTooHighMonthValid, isTooLowMonthValid
    const tooHighMonth = "13 / 99"
    const tooLowMonth = "0 / 99"

    //Act
    isTooHighMonthValid = validate.expiryString(tooHighMonth, " / ")
    isTooLowMonthValid = validate.expiryString(tooLowMonth, " / ")

    //Assert
    assert.equal(isTooHighMonthValid, false, "Returns false when month value > 12")
    assert.equal(isTooLowMonthValid, false, "Returns false when month value < 1")

    assert.end()
})