function operate(operator, num1, num2) {
    if (operator == "add") {return num1 + num2;}
    else if (operator == "subtract") {return num1 - num2;}
    else if (operator == "multiply") {return num1 * num2;}
    else if (operator == "divide") {
        if (num2 == 0) {
            alert("Can not divide by 0!");
            return num1;
        }
        return num1 / num2;
    }
}

function clearDisplay() {
    display.textContent = "";
    storedValue = curValue = 0;
    curOperator = null;
}

function createOperator(symbol, id) {
    let operator = document.createElement("button");
    operator.textContent = symbol;
    operator.classList.add("operator");
    operator.id = id;
    operator.addEventListener("click", () => {
        if (curOperator) {
            storedValue = operate(curOperator, storedValue, curValue);
            curOperator = id;
        } else {
            storedValue = curValue;
            curOperator = id;
        }
        curValue = 0;
        display.textContent += symbol;
    });
    container.appendChild(operator);
}

let display = document.createElement("div");
display.classList.add("display");
container.appendChild(display);

let clear = document.createElement("button");
clear.textContent = "C";
clear.classList.add("operator");
clear.addEventListener("click", () => {
    clearDisplay();
});
container.appendChild(clear);

for (let i = 0; i < 10; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    button.classList.add("number");
    button.addEventListener("click", () => {
        display.textContent += i;  // updates calculator display
        curValue = curValue * 10 + i;  // updates value of current number
    });
    if (i % 5 == 0) {
        container.appendChild(document.createElement("br"));
    }
    container.appendChild(button);
}

createOperator("+", "add");
createOperator("-", "subtract");
createOperator("*", "multiply");
createOperator("/", "divide");

let equal = document.createElement("button");
equal.textContent = "=";
equal.classList.add("operator");
equal.addEventListener("click", () => {
    if (curOperator) {
        storedValue = Math.round(operate(curOperator, storedValue, curValue) * 1000) / 1000;  // maximum 3 decimal places
        display.textContent = storedValue;
        curOperator = null;
        curValue = storedValue;
    }
});
container.appendChild(equal);

let storedValue = 0, curValue = 0, curOperator = null;

