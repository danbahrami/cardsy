import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiryString should strip non-numeric chars from dates", assert => {
    //Arrange
    let formattedExpiry, formattedExpiryWithYear
    const expiry = "1*?>"
    const expiryWithYear = "12 / 1XD DD9"

    //Act
    formattedExpiry = format.expiryString(expiry, " / ")
    formattedExpiryWithYear = format.expiryString(expiryWithYear, " / ")

    //Assert
    assert.equal(formattedExpiry, "1", "Strips non-numeric chars from month")
    assert.equal(formattedExpiryWithYear, "1", "Strips non-numeric chars from year")

    assert.end()
})