// fatorial
prompt = require("prompt-sync")()
var fat = Number(prompt("Digite o número: "));
var res = fat;
for (var i = 1; i < fat; i++) {
    res = res * i;
}
console.log(res);