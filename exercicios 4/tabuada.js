// tabuada
prompt = require("prompt-sync")()

let numero = Number(prompt("Digite o número alvo: "))

for (let i = 0; i <= 10; i++) {
  console.log(numero * i)
}