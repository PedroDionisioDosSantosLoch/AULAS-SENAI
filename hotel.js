let P = parseInt(prompt("Digite o numero de alunos que vão se residir: "));

let nomes = []
let email = []
let quartos = []

for (let i = 0; i < P; i++) {
    let Q = parseInt(prompt("informe seu quarto(0-9): "))
    let quartos_ocupados = quartos.includes(Q)
    console.log
    if (quartos_ocupados === true) {
        alert("quarto ja acupado!")
        i--;
    }
    else {
        let N = prompt("Informe seu nome: ")
        let E = prompt("informe seu email: ")

        nomes.push(N);
        email.push(E)
        quartos.push(Q)
    }
}
console.log("quartos_ocupados")
for(let j = 0; j<nomes.length; j++){
    console.log(`${quartos[j]} , ${nomes[j]} , ${email[j]}`)
}