const read = require("readline-sync");

let vetor = [];

for (let i = 0; i < 10; i++) {
    vetor[i] = Number(read.question("Digite o numero: " + i));
    
}

console.log(vetor);

vetor[5] = 1000;

console.log(vetor[9]);

for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i]);
}