process.stdin.on("data", (chunk) => {    
    const data = chunk.toString().trim().split(" ");
    
    const words = {};

    for (let word of data) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    const finalResult = Object.values(words);
    console.log(finalResult.length);
})
