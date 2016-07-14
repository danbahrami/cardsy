import test from "tape"
import getType from "../../src/utils/getType"

test("card.getType should return null if no type is found", assert => {
    //Arrange
    let type
    let nonMatchedNumber = "5678"

    //Act
    type = getType(nonMatchedNumber)

    //Assert
    assert.equal(type, null, "Returns null if there are no matches")

    assert.end()
})