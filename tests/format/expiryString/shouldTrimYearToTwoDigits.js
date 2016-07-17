import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiryString should trim year to two digits", assert => {
    //Arrange
    let formattedExpiry
    const expiry = "04 / 123"

    //Act
    formattedExpiry = format.expiryString(expiry, " / ")

    //Assert
    assert.equal(formattedExpiry, "04 / 12", "Trims year to 2 digits")

    assert.end()
})