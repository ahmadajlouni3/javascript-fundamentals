process.stdin.on("data", (chunk) => {    
    const data = chunk.toString();
    
    function square(n) { return n * n }
    
    console.log(square(Number(chunk)))
})