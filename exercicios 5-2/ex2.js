
let pessoa = [
    {nome: "Pinoquio", idade: 197, profissao: "chinelao"},
    {nome: "Shrek", idade: 100, profissao: "chinelao"},
    {nome: "Fiona", idade: 13, profissao: "chinelao"},
]

let idades = pessoa.reduce((acc, pessoa) => acc + pessoa.idade, 0) // reduzindo a tal condição

console.log(`A soma das idades é de: ${idades}`)

let media = idades / pessoa.length // calculando a media por idade / tamanho

console.log(`A média das idades é de: ${media.toFixed(0)}`)
