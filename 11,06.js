const carro = [ "Sf 90", "458 italia", "F40"]
console.log(carro)
function inserirFinal()  {
    veiculo = prompt("Adicione uma Fefa: ")
    carro.push(veiculo)
    console.log(carro)
    alert("A Ferrari "+ veiculo+" foi adicionada com sucesso!")
}
function retirarFinal(){
      carro.shift(veiculo)
      console.log(carro)
}
