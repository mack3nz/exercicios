let vetorNumeros = [12, 9, 14, 5, 6, 2, 7, 8];

if (vetorNumeros.length === 0) {
    console.error("O vetor está vazio. Não há números para comparar.");
} else {
    let maiorNumero = vetorNumeros[0];

    for (let i = 1; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] > maiorNumero) {
            maiorNumero = vetorNumeros[i];
        }
    }
    console.log(vetorNumeros)
    console.log("O maior número no vetor é:", maiorNumero);
}
