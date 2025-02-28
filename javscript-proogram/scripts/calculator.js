/**
Requirements:
-Get User Input for first number
-Get user input for the arithmetic operator
-Get user input for the second number
-Display the result in your browser
 */

/*const firstNum = parseInt(prompt(
    "Put the first number here. (It should be digits only, no letters): " 
));

const chosenOperator = prompt("Put in the ooperator you want to see here: ");

const secondNum = parseInt(prompt("Put in the second number to calculate: "));

calculate(firstNum, chosenOperator, secondNum);

const display = document.getElementById("jay").innerHTML; */

/*function calculate(a, b, c) {
    if (b === "+"){
        console.log(a + c);
    }
     else if (b === "-")
    {
        console.log(a - c);
    }
     else if (b === "*")
    {
        console.log(a * c);
    }
     else if (b === "/")
    {
        console.log(a / c);
    }
     else if (b === "%")
    {
        console.log(a % c);
    }
     else
    {
        console.log(`See the value you put in your operator input: ${b}`);
    };
}
    */

document.querySelector("button").addEventListener("click", function() {
    const firstNum = parseInt(prompt("Enter the first number (digits only): "));
    const chosenOperator = prompt("Enter an operator (+, -, *, /): ");
    const secondNum = parseInt(prompt("Enter the second number: "));

    calculate(firstNum, chosenOperator, secondNum);
});

function calculate(a, b, c) {
    const display = document.querySelector("#jay");

    if (isNaN(a) || isNaN(c)) {
        display.innerText = "Invalid input. Please enter numbers.";
        return;
    }

    switch (b) {
        case "+":
            display.innerText = `Result: ${a + c}`;
            break;
        case "-":
            display.innerText = `Result: ${a - c}`;
            break;
        case "*":
            display.innerText = `Result: ${a * c}`;
            break;
        case "/":
            display.innerText = c !== 0 ? `Result: ${a / c}` : "Cannot divide by zero";
            break;
        default:
            display.innerText = `Invalid operator: ${b}`;
    }
}
