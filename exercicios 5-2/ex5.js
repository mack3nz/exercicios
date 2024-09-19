const nomes = ['Ana', 'João', 'Pedro'];

const objetoNomes = nomes.reduce((acc, nome) => {
    acc[nome] = nome.length;
    return acc; 
}, {});

console.log(objetoNomes);
