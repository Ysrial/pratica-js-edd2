const read = require("readline-sync");
let v = [];

for (let i = 0; i < 10; i++) {
    v[i] = Math.floor(Math.random() * 1000);
}

console.log(`v = [${v}]`);

for (let i = v.length - 1; i >= 0; i--) {
    console.log(v[i]);
}