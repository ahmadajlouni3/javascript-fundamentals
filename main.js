process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().trim().split(" ").map(item => Number(item));
    

    console.log(...data.filter(item => Number.isInteger(item) && item > 0));

})
