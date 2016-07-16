import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should add a separator between month and year", assert => {
    //Arrange
    let formattedExpiry
    const month = "12"
    const year = ""

    //Act
    formattedExpiry = format.expiry(month, year)

    //Assert
    assert.equal(formattedExpiry, "12", "Does not add separator if empty string is passed as year")

    assert.end()
})