//let n = parseInt(prompt("Enter a positive integer: "))

function sumofmultiples (n) {
    let totalsum = 0;
    for (let a = 1; a <= n; a++) {
        if ( a % 3 === 0 || a % 5 === 0) {
            totalsum += a;
        }
    }
    return totalsum;
}
// if you were to take the input from a user - prompt
let n = parseInt(prompt("Enter a positive integer: "))

// calculate
let result = sumofmultiples(n);
//display result
console.log("The sum of numbers between 1 and", n, "that are multiples of 3 & 5 is:", result);