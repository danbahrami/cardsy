import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiryString should return only first digit of month when only part of the separator exists in the passed string", assert => {
    //Arrange
    let formattedExpiry, formattedExpiryWithYear
    const expiry = "12 /"
    const expiryWithYear = "12/ 99"

    //Act
    formattedExpiry = format.expiryString(expiry, " / ")
    formattedExpiryWithYear = format.expiryString(expiryWithYear, " / ")

    //Assert
    assert.equal(formattedExpiry, "1", "Removes separator and last digit of month")
    assert.equal(formattedExpiryWithYear, "1", "Removes year")

    assert.end()
})