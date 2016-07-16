import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should strip whitespace from month and year", assert => {
    //Arrange
    let formattedExpiry
    const month = "1 2"
    const year = "9   9"

    //Act
    formattedExpiry = format.expiry(month, year)

    //Assert
    assert.equal(formattedExpiry, "12 / 99", "Strips whitespace from month and year")

    assert.end()
})