let numeros = [10, 20, 30, 40, 50];

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
    console.log(`Após a iteração ${i + 1}, a soma é: ${soma}`);
}
console.log("")
console.log(`A soma de todos os números é: ${soma}`);
