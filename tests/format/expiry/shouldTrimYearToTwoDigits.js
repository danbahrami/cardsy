import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should convert 4 digit year to 2 digits", assert => {
    //Arrange
    let formattedExpiry
    const month = "12"
    const year = "2099"

    //Act
    formattedExpiry = format.expiry(month, year)

    //Assert
    assert.equal(formattedExpiry, "12 / 99", "Convert 4 digit year to 2 digits")

    assert.end()
})