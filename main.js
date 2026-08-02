process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().split("\n");
    
    const max = (a, b) => a > b ? a: b;

    console.log(max(data[0], data[1]));
})