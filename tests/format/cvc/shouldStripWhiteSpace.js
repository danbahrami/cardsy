import test from "tape"
import format from "../../../src/format"

test("cardsy.format.cvc should strip unwanted whitespace", assert => {
    //Arrange
    let formattedCvc
    const unformattedCvc = "1  2"

    //Act
    formattedCvc = format.cvc(unformattedCvc)

    //Assert
    assert.equal(formattedCvc, "12", "Strips unwanted whitespace")

    assert.end()
})