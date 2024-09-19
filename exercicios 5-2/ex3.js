let produtos = [
    { nome: 'Produto 1', preco: 100 },
    { nome: 'Produto 2', preco: 200 },
    { nome: 'Produto 3', preco: 300 },
];

let produtosComDesconto = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco * 0.9 // mapeando pra essa função
    };
});

console.log(produtos)
console.log(produtosComDesconto);
