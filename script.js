do {
    operator = prompt(`Choose operation (+, -, * or /)`);
} while(!(operator == '+' || operator == '-' || operator == '*' || operator == '/'))
console.log(operator);

do {
    operands = parseInt(prompt(`How many operands do you want to use? (More than 1 less than 7)`));
} while(operands <= 1 || operands > 7 || isNaN(operands));
console.log(operands);
do {
    sum = parseInt(prompt(`enter first number`));
} while(isNaN(sum));

for(i = 1, operand = i; i < operands; i++) {
    do {
        operand = +prompt(`Enter else ${operands - 1} numbers`);
        console.log(operand);
    } while(isNaN(operand));

    if(operator == `+`) {
        sum += operand;
    } else if(operator == `-`) {
        sum -= operand;
    } else if(operator == `*`) {
        sum *= operand;
    } else if(operator == `/`) {
        sum /= operand;
    }
}
console.log(`answer is ${sum}`);