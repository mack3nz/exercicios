const pessoas = [
    { nome: 'Ana', idade: 30 },
    { nome: 'João', idade: 25 },
    { nome: 'Pedro', idade: 40 },
];

const listaFormatada = pessoas.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

console.log(listaFormatada);
