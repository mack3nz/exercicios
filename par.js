prompt = require('prompt-sync')()
const n1 = Number(prompt("Defina o valor: "))
if (n1 == -0) {
    console.log("Digite um número inteiro!")
} else if (n1 %2 == 0){
    console.log(`O ${n1} é par!`)
} else {
    console.log(`O ${n1} é impar!`)
}