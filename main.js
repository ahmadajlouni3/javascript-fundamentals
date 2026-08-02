// Print the greeting on a single line below.

process.stdin.on("data", (chunk) => {
    const numbers = chunk.toString().split("\n");
    const fnum = Number(numbers[0]);
    const snum = Number(numbers[1]);
    const tnum = Number(numbers[2]);
    const avg = Math.floor((fnum +snum +tnum) / 3);

    console.log(avg)
})