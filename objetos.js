const prompt = require('prompt-sync')()

for (let i = 0; i < 4 ; i++) {
let pessoa = {
nome:prompt("Informe seu nome: "),
 idade: Number(prompt("informe sua idade: ")),
 altura: parseFloat(prompt("informe sua altura: ")),
 peso: parseFloat(prompt("Informe seu peso: ")),
 calcularimc:  function(){
     return pessoa.peso /(this.altura*this.altura)
     
 },
 maiorDeIdade: function(){
     if(pessoa.idade >18){
     return true
    
     }
     else{
     return false
     
     }



 }
 

}
}
console.log(pessoa.idade)

