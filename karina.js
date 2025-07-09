function add(){
    const input = document.getElementById("rtr")
    const lista = document.getElementById("lista")

    if( input.value.trim() ){
        lista.innerHTML += `<li> ${input.value}</li>`
        input.value = ""

    }
    if(lista.children.length > 5){
        alert("PAAAAAAAAAAAAA ACESSO NEGADO PRETOOOOOOOOO!!!!!!!!!!!!!!!")
        return;
    }
    lista.classList.add("compra")
}