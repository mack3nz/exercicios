prompt = require("prompt-sync")()

const senha = prompt("Digite sua senha: ")
const comprimento_minimo = senha.length >= 8;
const contem_maiuscula = /[A-Z]/.test(senha);
const contem_minuscula = /[a-z]/.test(senha);
const contem_digito = /\d/.test(senha);
const contem_especial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

const senha_completa = comprimento_minimo && contem_maiuscula && contem_minuscula && contem_digito && contem_especial

if (senha_completa) {
    console.log ("Sua senha está forte!")
} else {
    console.log ("Sua senha está fraca!")
}