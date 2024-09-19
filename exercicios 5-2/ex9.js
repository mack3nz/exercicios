const listas = [
    ['Ana', 'João'],
    ['Pedro', 'Maria'],
    ['Lucas', 'Fernanda']
];

const listaConcatenada = listas.reduce((acc, lista) => acc.concat(lista), []);

console.log(listaConcatenada);
