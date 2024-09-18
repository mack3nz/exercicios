// triangulos
prompt = require("prompt-sync")()
let linhas;

while (true) {
    linhas = Number((prompt("Digite o número de linhas do triângulo (ou 0 para sair): ")));

  if (linhas === 0) {
    break;
  }

  for (let i = 1; i <= linhas; i++) {
    let linha = "";
    for (let j = 1; j <= linhas - i; j++) {
      linha = linha + " "; 
    }
    for (let j = 1; j <= i; j++) {
      linha = linha + "* "; 
    }
    console.log(linha);
  }
}