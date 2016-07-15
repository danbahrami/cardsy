import test from "tape"
import format from "../../../src/format"

test("cardsy.format.number should convert ints to strings", assert => {
    //Arrange
    let formattedNumber
    const unformattedNumber = 42

    //Act
    formattedNumber = format.number(unformattedNumber)

    //Assert
    assert.equal(formattedNumber, "42", "Returns a string when an int is passed")

    assert.end()
})