// Anonymous function

(function(a, b, c) {
    return a + b + c
})

// Function expression
const sum = function(a, b) {
    return a + b
}

const result = sum(1, 3)
console.log(result)

const anotherSum = sum

console.log(anotherSum(66, 4))

let x = 3
console.log(x)

x = sum

console.log(x(11, 16))