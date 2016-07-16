import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should add a separator between month and year", assert => {
    //Arrange
    let defaultFormattedExpiry, customFormattedExpiry
    const month = "12"
    const year = "99"

    //Act
    defaultFormattedExpiry = format.expiry(month, year)
    customFormattedExpiry = format.expiry(month, year, "O_O")

    //Assert
    assert.equal(defaultFormattedExpiry, "12 / 99", "Uses \" / \" as a default separator")
    assert.equal(customFormattedExpiry, "12O_O99", "Uses a custom separator when one is provided")

    assert.end()
})