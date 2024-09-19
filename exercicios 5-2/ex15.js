const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const resultado = matriz
    .flat() // Converte a matriz em um vetor unidimensional
    .filter(numero => numero % 2 === 0) // Filtra os números pares
    .map(par => par * 3); // Multiplica os números pares por 3

console.log(resultado);
