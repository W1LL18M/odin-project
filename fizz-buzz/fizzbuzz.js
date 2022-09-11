// loops through numbers one to number entered using a for loop
// check for multiples of 3 using % operator within for loop
// check for multiples of 5 using % operator within for loop
// console.log to print out number or corresponding symbol

function fizzbuzz(myNumber) {
    for (let i = 1; i <= myNumber; i++) {
        if (isDivisibleBy(i, 3)) {
            if (isDivisibleBy(i, 5)) {
                console.log("FizzBuzz");
            } else {
                console.log("Fizz");
            }
        } else if (isDivisibleBy(i, 5)) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function isDivisibleBy(myNumber, divisor) {
    if (myNumber % divisor == 0) {
        return true;
    } else {
        return false;
    }
}

let answer = parseInt(prompt("Enter an integer for a game of Fizz Buzz"));
fizzbuzz(answer);