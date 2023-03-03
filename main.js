// This is where we will have our JS functionality. (separated from test cases)
function isEven(num) {
    return num % 2 === 0
}

function divide(a, b) {
    return a / b
}

function isPositive(num) {
    return num >= 0 ? true : false
}

// module.exports is maintained by node.js
// module.exports is going to be an object which exports functions we can access anywhere throughout our project/ file structure. 
// In this case, we are exporting the reference to our function isEven, so that we can test within lesson.test.js
module.exports = {
    isEven, 
    divide, 
    isPositive
}