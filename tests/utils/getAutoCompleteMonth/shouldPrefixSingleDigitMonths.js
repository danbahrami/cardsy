import test from "tape"
import card from "../../../src/utils/cardUtils"

test("getAutoCompleteMonth should prefix single digit months", assert => {
    //Arrange
    let formattedMonth
    const month = "3"

    //Act
    formattedMonth = card.getAutoCompleteMonth(month)

    //Assert
    assert.equal(formattedMonth, "03", "Prefixes single digit month with a zero")

    assert.end()
})