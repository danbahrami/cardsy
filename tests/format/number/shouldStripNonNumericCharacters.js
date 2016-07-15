import test from "tape"
import format from "../../../src/format"

test("cardsy.format.number should strip non-numeric characters", assert => {
    //Arrange
    let formattedNumber
    const unformattedNumber = "1XX"

    //Act
    formattedNumber = format.number(unformattedNumber)

    //Assert
    assert.equal(formattedNumber, "1", "Strips non-numeric characters")

    assert.end()
})