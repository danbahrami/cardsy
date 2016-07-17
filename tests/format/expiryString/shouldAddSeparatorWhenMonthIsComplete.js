import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiryString should add separator when month is complete", assert => {
    //Arrange
    let formattedExpiry
    const expiry = "12"

    //Act
    formattedExpiry = format.expiryString(expiry, " / ")

    //Assert
    assert.equal(formattedExpiry, "12 / ", "Adds a separator when a complete month is passed")

    assert.end()
})