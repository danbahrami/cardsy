import test from "tape"
import card from "../../../src/utils/cardUtils"

test("getAutoCompleteMonth should convert int to string", assert => {
    //Arrange
    let formattedMonth
    const month = 12

    //Act
    formattedMonth = card.getAutoCompleteMonth(month)

    //Assert
    assert.equal(formattedMonth, "12", "Converts int to string")

    assert.end()
})