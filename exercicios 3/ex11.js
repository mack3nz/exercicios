// Faça uma página que leia os três lados de um triângulo e informe se ele é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes) e apresente uma imagem mostrando o tiângulo escolhido.
prompt = require("prompt-sync")()
const a = Number(prompt("Digite o primeiro número do lado: "))
const b = Number(prompt("Digite o segundo número do lado: "))
const c = Number(prompt("Digite o terceiro número do lado: "))
const d = Number(prompt("Digite o quarto número do lado: "))

if(a === b && b === c && c === d){
    console.log("Quadrado")
} else if (a === c && b === d){
        console.log("Retângulo")
} else if (a === b) {
        console.log("Losango")
} else {
    console.log("Outro tipo")
}