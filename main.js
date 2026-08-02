process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().split("\n");
    

    if (data[0] % 3 === 0 && data[0] % 5 === 0) {
        console.log("FizzBuzz")
    } else if (data[0] % 3 === 0) {
        console.log("Fizz");
    } else if (data[0] % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(data[0]);
    }
})