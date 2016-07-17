import test from "tape"
import card from "../../../src/utils/cardUtils"

test("getAutoCompleteMonth should prefix single digit months", assert => {
    //Arrange
    let formattedMonth, formattedIncompleteMonth
    const month = "3"
    const incompleteMonth = "1"

    //Act
    formattedMonth = card.getAutoCompleteMonth(month)
    formattedIncompleteMonth = card.getAutoCompleteMonth(incompleteMonth)

    //Assert
    assert.equal(formattedMonth, "03", "Prefixes single digit month with a zero")
    assert.equal(formattedIncompleteMonth, "1", "Doesn't prefix month starting in 1")

    assert.end()
})