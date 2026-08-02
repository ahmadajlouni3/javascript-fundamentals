function reverseString(str) {
    // create container
    let newString = "";

    // create copy to reduce side effect.
    const existingStr = str.trim();

    // iterate through copy but in reverse way
    for (let i = existingStr.length - 1; i >= 0; i--) {
        newString += existingStr[i];
    }

    return newString;
}


process.stdin.on("data", (chunk) => {
    
    console.log(reverseString(chunk.toString()))
})