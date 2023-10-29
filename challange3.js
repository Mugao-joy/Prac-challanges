// create function
// the fibonacci is an array/list of numbers
//must be > than 1 to create a sequence
//for-loop for increment
/*function fibonacci_sequence (n) {
    let fibonacciNumbers = [];
    if (n === 1) {
        fibonacciNumbers.push(0);
    } else if (n >=2) {
        fibonacciNumbers.push(0, 1);
        for (let a = 2; a < n; a++) {
            fibonacciNumbers.push()
        }
    }
}*/

function* fib(n) { 
    let [a, b] = [0, 1]; 
    for (let i =  0; i < n; ++i) { 
        [a, b] = [b, a + b]; 
        yield a; //return doesnt work here
    } 
} 
console.log(...fib(1000));