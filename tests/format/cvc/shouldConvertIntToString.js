import test from "tape"
import format from "../../../src/format"

test("cardsy.format.cvc should convert ints to strings", assert => {
    //Arrange
    let formattedCvc
    const unformattedCvc = 12

    //Act
    formattedCvc = format.cvc(unformattedCvc)

    //Assert
    assert.equal(formattedCvc, "12", "Returns a string when an int is passed")

    assert.end()
})