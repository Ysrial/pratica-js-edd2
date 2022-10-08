const read = require("readline-sync");

let altura = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    altura[i] =  Number(read.question(`Digite a altura do atleta: `));
    soma += altura[i];
}

let media = soma / altura.length;

console.log(`As alturas media sao ${media.toFixed(2)}`)

for (let i = 0; i < altura.length; i++) {
    if (altura[i] > media) {
        console.log(`Essa altura e maior que media ${altura[i]}`);
    }
}