// achar a letra
prompt = require("prompt-sync")()

let palavra = prompt("Digite a palavra: ");
let letra = prompt("Digite a letra alvo: ");
let count = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        count++;
    }
}

console.log(`A letra '${letra}' aparece ${count} vezes na palavra '${palavra}'.`);