const produtos = [
    { nome: 'Produto 1', preco: 100, categoria: 'Eletrônicos' },
    { nome: 'Produto 2', preco: 200, categoria: 'Vestuário' },
    { nome: 'Produto 3', preco: 300, categoria: 'Eletrônicos' },
    { nome: 'Produto 4', preco: 150, categoria: 'Vestuário' },
    { nome: 'Produto 5', preco: 50, categoria: 'Alimentos' },
];

function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

// Exemplo de uso
const produtosEletronicos = filtrarPorCategoria(produtos, 'Eletrônicos');
console.log(produtosEletronicos);
