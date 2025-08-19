const prompt = require ("prompt-sync")()


let contas = []
let saldoTotal = 0
 

for(let i = 0; i<3 ; i++){
    titular = prompt("informe o titular da conta: ")
    NumConta = prompt("informe o numero da conta:")
    saldo = parseFloat(prompt("informe o saldo inicial:")) 
    


let banco = {
    titular: titular,
    NumConta: NumConta,
    saldo: saldo,
    sacar: function(valor) {
        this.saldo = this.saldo - valor
    },
    depositar: function(valor){
        this.saldo = this.saldo + valor
    }
}
contas.push(banco)
}
for (let i = 0; i < contas.length; i++) {
    console.log(`${i + 1} - ${contas[i].titular} | Saldo: R$ ${contas[i].saldo}`);
}
let escolha = parseInt(prompt("Escolha a conta (1-3): ")-1)

console.log(contas[escolha])


let opcao = prompt("Deseja sacar(S) ou depositar(D)").toUpperCase()
let valor = parseFloat(prompt("Valor: "))

if( opcao == "S"){
  contas[escolha].sacar(valor)
}
else{
  contas[escolha].depositar(valor)
}

console.log(contas[escolha])



