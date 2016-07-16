import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should prefix single digit months", assert => {
    //Arrange
    let formattedExpiry
    const month = "3"
    const year = "99"

    //Act
    formattedExpiry = format.expiry(month, year)

    //Assert
    assert.equal(formattedExpiry, "03 / 99", "Prefixes single digit month with a zero")

    assert.end()
})