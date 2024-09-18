const matriz = [
    [5, 12, 3],
    [7, 8, 20]
];

let maior = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
        }
    }
}

console.log(matriz)
console.log("O maior valor na matriz é:", maior);
