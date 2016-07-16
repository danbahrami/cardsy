import test from "tape"
import format from "../../../src/format"

test("cardsy.format.cvc should trim cvc to a maximum of 4 characters", assert => {
    //Arrange
    let formattedCvc
    const tooLong = "12345"

    //Act
    formattedCvc = format.cvc(tooLong)

    //Assert
    assert.equal(formattedCvc, "12345", "Trims cvc to a maximum of 4 characters")

    assert.end()
})