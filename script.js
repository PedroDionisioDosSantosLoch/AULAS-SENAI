let P =  parseInt(prompt("Digite o numero de pessoas que você quer cadastrar: "));


let alturas = []
let idade = []
let  nome = []
let soma = 0;
let idade_menor = 0;
let menor = []

for (let i = 0; i < P ; i++) {
    let N =  prompt("Informe seu nome: ")
    let I =  Number(prompt("informe sua idade: "))
    let A =  parseFloat(prompt("informe sua altura"))
    alturas[i] = A;
    idade[i] = I
    nome[i] = N
    soma = soma + A;
    if(idade<16){
        idade_menor += 1;
        menor.push(N)
    }
}

const media = soma/P;
alert(`A media das alturas foi ${media}`)
alert(`O numero de pessoas de menor de idade é:  ${idade_menor}  sendo eles: ${menor}`)