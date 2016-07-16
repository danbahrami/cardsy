import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should strip non-numeric characters from month and year", assert => {
    //Arrange
    let formattedExpiry
    const month = "1G?2"
    const year = "9***9"

    //Act
    formattedExpiry = format.expiry(month, year)

    //Assert
    assert.equal(formattedExpiry, "12 / 99", "Strips non-numeric characters from month and year")

    assert.end()
})