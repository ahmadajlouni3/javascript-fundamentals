// Print the greeting on a single line below.

process.stdin.on("data", (chunk) => {
    const numbers = chunk.toString().split("\n");
    const firstNumber = Number(numbers[0]);
    const secondNumber = Number(numbers[1]);
    console.log(firstNumber + secondNumber);
});