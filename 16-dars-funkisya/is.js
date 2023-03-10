// function definition
x = xisob(7, 8)
console.log(x)

function xisob(a, b) {
    return a + b
}

// function expression
const xisobla = function(a, b) {
    return a + b;
}
natija = xisobla(7, 9)
console.log(natija)

//arrow function
const calc = (a, b) => a + b;
c = calc(5, 8)
console.log(calc(5, 8), c)