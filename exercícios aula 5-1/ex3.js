const vetor = [3, 8, 1, 6, 5, 10, 2];

let maiorNumero = vetor[0];

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maiorNumero) {
        maiorNumero = vetor[i];
    }
}
console.log(vetor)
console.log("O maior número no vetor é:", maiorNumero);
