
let produtos = [
    { produto: "Whey", preco: 106 },
    { produto: "Creatina", preco: 93 },
    { produto: "Pre-treino", preco: 116 }
];

let caros = produtos.filter (produtos => produtos.preco > 100) // filtrando por tal condicao
console.log(caros)