let numeros = [];
let pares = [];
let impares = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = Math.floor(Math.random() * 100);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    }else {
        impares.push(numeros[i]);
    }
}

console.log(`numeros = [${numeros}]`);
console.log(`pares = [${pares}]`);
console.log(`impares = [${impares}]`);