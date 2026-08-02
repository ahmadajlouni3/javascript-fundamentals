process.stdin.on("data", (chunk) => {    
    const data = chunk.toString();
    
    let num = Number(data);
    let sum = 0;
    let i = 0;

    while (i < Number(data)) {
        sum += num;
        num--;
        i++;
    }

    console.log(sum)
    
})