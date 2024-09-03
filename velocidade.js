prompt = require("prompt-sync")()
let velocidade = Number(prompt("Digite a velocidade do carro: "))

if(velocidade <= 80) {
    console.log(`Sua velocidade é de ${velocidade.toFixed(0)}KM/h`)
    console.log(`Você está no limite!`)
} else if(velocidade <= 100) {
    console.log(`Sua velocidade é de ${velocidade.toFixed(0)}KM/h`)
    console.log(`Você recebeu uma infração leve`)
} else if(velocidade < 82) {
    console.log(`Sua velocidade é de ${velocidade.toFixed(0)}KM/h`)
    console.log(`Você recebeu uma infração leve`)
} else if(velocidade >= 101) {
    console.log(`Sua velocidade é de ${velocidade.toFixed(0)}KM/h`)
    console.log(`Você recebeu uma infração grave`)
}