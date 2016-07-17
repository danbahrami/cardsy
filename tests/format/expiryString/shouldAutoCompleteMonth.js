import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiryString should auto complete months", assert => {
    //Arrange
    let formattedExpiry
    const expiry = "5"

    //Act
    formattedExpiry = format.expiryString(expiry, " / ")

    //Assert
    assert.equal(formattedExpiry, "05 / ", "Prefixes single digit months and adds a separator")

    assert.end()
})