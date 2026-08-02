process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().trim().split(" ").map(item => Number(item));
    function sum(...data) {
        return data.flat().reduce((accumelator, item) => accumelator + item, 0);
    }

    console.log(sum(data));
})
