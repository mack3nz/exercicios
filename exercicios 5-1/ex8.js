
prompt = require("prompt-sync")()
let vetor = ["9", "6" ,"2" ,"3", "x", "a", "f", "e", "5"]
const elemento = prompt("Digite o elemento que você quer checkar: ")

let encontrado = false;
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === elemento) {
        encontrado = true;
        break;
    }
}
console.log(`O seu elemento é: ${elemento}`)
console.log(`Verdadeiro ou falso? ${encontrado}`)