prompt = require("prompt-sync")()
let vetn = ["jose", "lucas", "pedro", "joao", "isabeli", "erica", "rafael", "nicolas", "fabricio", "alessandra"]
const n = prompt("Digite o nome que você busca: ").toLowerCase();

if (vetn.includes(n)) {
    console.log(`Achei o nome ${n}`);
} else {
    console.log(`Não achei o nome ${n}`);
}
