const read = require("readline-sync");

let v = [];

for (let i = 0; i < 10; i++) {
    v[i] = Number(read.question(`v[${i}] = `));
}

console.log(`Digite os numeros: `)

// Chave

let maior = 0

for (let i = 1; i < v.length; i++) {
    if (v[maior] < v[i]) {
        maior = i;
    }   
}

console.log(`v = [${v}]`);
//console.log(`O maior elemento do vetor e ${maior}`)
console.log(`O maior elemento do vetor esta na posicao ${maior}`);