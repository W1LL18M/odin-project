function add7(number) {
    return number + 7;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function capitalize(myString) {
    let firstLetter;
    let restOfString;
    firstLetter = myString[0].toUpperCase();
    if (myString.length > 1) {
        restOfString = myString.substring(1).toLowerCase();
        return firstLetter + restOfString;
    } else {
        return firstLetter;
    }
}

function lastLetter(myString) {
    let lastPos = myString.length - 1;
    return myString[lastPos];
}

console.log(add7(4));
console.log(multiply(4,7));
console.log(capitalize("HELLO"));
console.log(capitalize("hello"));
console.log(capitalize("hElLo"));
console.log(capitalize("h"));
console.log(lastLetter("William"));
console.log(lastLetter("a"));