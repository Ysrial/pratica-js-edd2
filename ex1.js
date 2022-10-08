const read = require("readline-sync");

let vetNum = [];

for (let i = 0; i < 10; i++) {
    let n = Number(read.question(`Digite o ${(i + 1)} numero`));
    vetNum[i] = n * n;
}

console.log("[" + vetNum + "]")