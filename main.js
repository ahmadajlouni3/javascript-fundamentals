process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().split("\n");
    const name = data[0];
    const age = data[1];

    console.log(`Hi, ${name}! You are ${age} years old.`)
})