const produtos = [
    { nome: 'Produto 1', preco: 100 },
    { nome: 'Produto 2', preco: 200 },
    { nome: 'Produto 3', preco: 150 },
];

const somaTotal = produtos.reduce((acc, produto) => acc + produto.preco, 0);

console.log(somaTotal);
