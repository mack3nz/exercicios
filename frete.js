    prompt = require("prompt-sync")()
    const pacote = Number(prompt("Digite o peso do pacote: "))
    let frete = prompt("Digite a modalidade de envio: ")
    const nacional = pacote * 3.14
    const internacional = pacote * 5.14
    const expresso = pacote * 2.30

    if(frete == 'nacional') {
        frete = nacional
        console.log("Você escolheu a modalidade padrão.")
        console.log(`O seu frete vai custar: R$${nacional.toFixed(2)}`)
    } else if(frete == 'internacional'){
        frete = internacional
        console.log("Você escolheu a modalidade internacional.")
        console.log(`O seu frete vai custar: R$${internacional.toFixed(2)}`)
    } else if(frete == 'expresso'){
        frete = expresso
        console.log("Você escolheu a modalidade expresso.")
        console.log(`O seu frete vai custar: R$${expresso.toFixed(2)}`)
    }