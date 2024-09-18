let vet1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let vet2 = [];

for (let i = vet1.length - 1; i >= 0; i--) {
    vet2.push(vet1[i]);
}

console.log("Vetor original:", vet1);
console.log("Vetor invertido:", vet2);
