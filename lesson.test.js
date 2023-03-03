// Import our functions from main.js
const modules = require('./main')
// console.log(modules)
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

// This is where all of our test cases belong:
// TEST CASE for isEven 
test("It should return true when called with an even number.", () => {
    expect(isEven(4)).toBe(true)
})

// TEST CASE for divide
test("It should return a number when called", () => {
    expect(typeof divide(4, 2)).toBe("number")
})

test("It should return true when passed a positive number or 0", () => {
    expect(isPositive(3)).toBe(true)
    expect(isPositive(0)).toBe(true)
})

test("It should return false when passed a negative number.", () => {
    expect(isPositive(-3)).toBe(false)
})