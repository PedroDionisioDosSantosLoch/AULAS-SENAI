const divbotaoiniciar = document.getElementById("IniciarJogo")
const divcaixaQuiz = document.getElementById("caixaQuiz")
const h2perguntadoquiz = document.getElementById("perguntadoquiz")

let indicePerguntas = 0

// Arrays
const perguntas = [
    {pergunta:"Qual é o maior deserto do mundo?",opcao:["Atacama", "Antartica" , "Saara"]},
    {pergunta:"Qual é a capital do Brasil?",opcao:["Acre", "Amazonas" , "brasilia"]},
     {pergunta:"Qual é a capital da Austrália?",opcao:["Berlim", "Nove York" , "Camberra"]},
     {pergunta:"Qual é o país com maior população no mundo?",opcao:["Monaco", "China" , "India"]},
     {pergunta:" Qual a linha imaginária que atravessa o Brasil?",opcao:["Feilicidade", "Japão" , "Equador"]},
     {pergunta:"Qual o oceano que banha o Brasil?",opcao:["Azul", "Vermelho" , "Atlântico"]},
]




function IniciarJogo(){
    fecharbotaoinicial()
      abrirteladojogo()
    
}

function fecharbotaoinicial(){
    divbotaoiniciar.innerHTML = ""
}


function abrirteladojogo(){
    divcaixaQuiz.classList.add("active");
    h2perguntadoquiz.textContent = perguntas [indicePerguntas].pergunta
    //adicionando um botao ao painel
    const botaopergunta = document.createElement("button");
    
    //adicionando texto no botao
    botaopergunta.textContent = perguntas [indicePerguntas].pergunta;
    
    //adicionar uma classe css no botao
    botaopergunta.classList.add("answer-btn");
    opcoesRespostas.appendChild(botaopergunta);
}

function proximapergunta(){
        indicePerguntas++
        if(indicePerguntas < perguntas.length){
            abrirteladojogo()
    }

}
