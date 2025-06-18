const divbotaoiniciar = document.getElementById("IniciarJogo")
const divcaixaQuiz = document.getElementById("caixaQuiz")

const indicePerguntas = 0

// Arrays
const perguntas = [
    "Qual é o maior deserto do mundo?",
     "Qual é a capital do Brasil?",
     "Qual é a capital da Austrália?",
     "Qual é o país com maior população no mundo?",
     " Qual a linha imaginária que atravessa o Brasil?",
     "Qual o oceano que banha o Brasil?",
]




function IniciarJogo(){
    fecharbotaoinicial()
      abrirteladojogo()
    
}

function fecharbotaoinicial(){
    divbotaoiniciar.innerHTML=""
}


function abrirteladojogo(indice){
    divcaixaQuiz.classList.add("active");
    
    //adicionando um botao ao painel
    const botaopergunta = document.createElement("button");
    
    //adicionando texto no botao
    botaopergunta.textContent = perguntas [indicePerguntas];
    
    //adicionar uma classe css no botao
    botaopergunta.classList.add("answer-btn");
    opcoesRespostas.appendChild(botaopergunta);
}

function proximapergunta(){
indicePerguntas++
if(indicePerguntas < perguntas.length){
    abrirteladojogo(indicePerguntas)
}


}