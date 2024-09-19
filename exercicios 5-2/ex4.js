const produtos = [
    { nome: 'Produto 1', preco: 100, categoria: 'Eletrônicos' },
    { nome: 'Produto 2', preco: 200, categoria: 'Vestuário' },
    { nome: 'Produto 3', preco: 300, categoria: 'Eletrônicos' },
    { nome: 'Produto 4', preco: 150, categoria: 'Vestuário' },
    { nome: 'Produto 5', preco: 50, categoria: 'Alimentos' },
];

const contagemCategorias = produtos.reduce((a, b) => { // a e b servem p contar
    a[b.categoria] = (a[b.categoria] || 0) + 1;
    return a;   // return vai devolver o valor
}, {});

console.log(contagemCategorias);
