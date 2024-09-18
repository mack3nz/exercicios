// somar impares ate 50
var soma = 0
let i = 1
while (i <= 50) {
    if (i % 2 != 0) {
        console.log(i)
        soma = soma + i;
    }

    i++;
    // i = i + 1
}

console.log (soma)
