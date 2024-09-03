prompt = require("prompt-sync")()
const nota_final = Number(prompt("Digite a sua nota queridao: "))

if(nota_final >= 9) {
    console.log(`Sua nota foi: ${nota_final}`)
    console.log("Você ficou com A")
} else if (nota_final >= 7 && nota_final <9) {
    console.log(`Sua nota foi: ${nota_final}`)
    console.log(`Você ficou com B`)
} else if (nota_final >= 5 && nota_final <7) {
    console.log(`Sua nota foi: ${nota_final}`)
    console.log(`Você ficou com C`)
} else if (nota_final >= 3 && nota_final <5) {
    console.log(`Sua nota foi: ${nota_final}`)
    console.log(`Você ficou com D`)
} else if(nota_final < 3) {
    console.log(`Sua nota foi: ${nota_final}`)
    console.log(`Você ficou com E`)
}