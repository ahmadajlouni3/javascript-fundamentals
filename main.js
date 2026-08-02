process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().trim().split(" ");
    
    const result = data
    .map(item => Number(item))
    .filter(item => item % 2 === 0)
    .map(item => Math.pow(item, 2))
    .reduce((acc, item) => acc + item, 0);

    console.log(result);
})
