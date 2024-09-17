prompt = require("prompt-sync")()

let corInserida = prompt("Digite uma cor: ")
const cores = ["vermelho", "azul", "amarelo", "preto", "rosa"]

let posicao = cores.indexOf(corInserida)

if (posicao != -1) {
    console.log(`A cor ${corInserida} está na posição ${posicao}`)
} else {
    console.log(`A cor ${corInserida} não foi encontrada.`)
}