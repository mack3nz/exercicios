
let vetor = [];
for (let i = 0; i < 5; i++) {
    vetor.push(gerar(1, 100));
}

vetor.sort((a, b) => a - b);

console.log("Vetor original:", vetor);
