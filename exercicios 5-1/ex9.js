prompt = require("prompt-sync")()
const n = Number(prompt("Digite o número: ")); 
const vetor = []; 


for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        vetor[i] = "Par";
    } else {
        vetor[i] = "Ímpar";
    }
}


console.log(vetor);