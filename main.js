process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().trim().split(" ");
    let maxNum = -Infinity;   
    for (let i = 0; i < data.length; i++) {
        if (maxNum < Number(data[i])) {
            maxNum = Number(data[i]);
        }
    }

    console.log(maxNum);
})
