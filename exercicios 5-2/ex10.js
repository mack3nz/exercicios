const pessoas = [
    { nome: 'Ana', idade: 30 },
    { nome: 'João', idade: 45 },
    { nome: 'Pedro', idade: 28 },
    { nome: 'Maria', idade: 50 },
];

const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
    return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
});

console.log(pessoaMaisVelha);
