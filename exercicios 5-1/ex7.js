const vetor = [10, 20, 30, 40, 50]; 

if (vetor.length === 0) {
    console.log("O vetor está vazio. A média é: 0");
} else {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }

    const media = soma / vetor.length;
    console.log(`Os números são: ${vetor}`);
    console.log(`A média deles é: ${media}`);
}
