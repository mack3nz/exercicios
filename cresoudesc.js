prompt = require("prompt-sync")()
const n1 = Number(prompt("Digite o 1° número "))
const n2 = Number(prompt("Digite o 2° número "))
const n3 = Number(prompt("Digite o 3° número "))

if (n1 > n2 || n1 > n3) {
    console.log("Ordem decrescente")
} else if (n1 < n2 || n1 < n3)
    console.log("ordem crescente")