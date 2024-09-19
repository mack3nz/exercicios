const produtos = [
    { nome: 'Produto 1', preco: 30 },
    { nome: 'Produto 2', preco: 60 },
    { nome: 'Produto 3', preco: 45 },
    { nome: 'Produto 4', preco: 100 },
    { nome: 'Produto 5', preco: 20 },
];

const produtosAgrupados = produtos.reduce((acc, produto) => {
    if (produto.preco > 50) {
        acc.acimaDe50.push(produto);
    } else {
        acc.ate50.push(produto);
    }
    return acc;
}, { acimaDe50: [], ate50: [] });

console.log(produtosAgrupados);
