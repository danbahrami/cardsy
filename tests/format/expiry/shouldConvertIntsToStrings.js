import test from "tape"
import format from "../../../src/format"

test("cardsy.format.expiry should convert ints to strings", assert => {
    //Arrange
    let formattedExpiry
    const month = 12
    const year = 99

    //Act
    formattedExpiry = format.expiry(month, year, "/")

    //Assert
    assert.equal(formattedExpiry, "12/99", "Returns a string when an ints are passed")

    assert.end()
})