import test from "tape"
import card from "../../src/utils/cardUtils"

test("cardsy.getType should return null if no type is found", assert => {
    //Arrange
    let type
    let nonMatchedNumber = "5678"

    //Act
    type = card.getType(nonMatchedNumber)

    //Assert
    assert.equal(type, null, "Returns null if there are no matches")

    assert.end()
})