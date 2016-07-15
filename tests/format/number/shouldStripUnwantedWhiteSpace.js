import test from "tape"
import format from "../../../src/format"

test("cardsy.format.number should strip unwanted whitespace", assert => {
    //Arrange
    let formattedNumber
    const unformattedNumber = "4  2"

    //Act
    formattedNumber = format.number(unformattedNumber)

    //Assert
    assert.equal(formattedNumber, "42", "Strips unwanted whitespace")

    assert.end()
})