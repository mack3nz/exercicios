const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'João', nota: 6.5 },
    { nome: 'Pedro', nota: 7.0 },
    { nome: 'Maria', nota: 9.0 },
];

const alunosAprovados = alunos.filter(aluno => aluno.nota > 7);

console.log(alunosAprovados);
