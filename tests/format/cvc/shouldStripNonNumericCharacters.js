import test from "tape"
import format from "../../../src/format"

test("cardsy.format.cvc should strip non-numeric characters", assert => {
    //Arrange
    let formattedCvc
    const unformattedCvc = "1BC"

    //Act
    formattedCvc = format.cvc(unformattedCvc)

    //Assert
    assert.equal(formattedCvc, "1", "Strips non-numeric characters")

    assert.end()
})