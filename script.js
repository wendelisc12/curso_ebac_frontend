var validacaoResultado = document.getElementById('validacaoResultado')

function checarNumero(event){
    event.preventDefault()
    var a = document.getElementById('a')
    var b = document.getElementById('b')
    
    if(b.value > a.value){
        validacaoResultado.innerHTML = "<h1 class='valido'>Formulário valido!</h1>"
        a.style.border = "1px solid #00dd30"
        b.style.border = "1px solid #00dd30"
    }else{
        validacaoResultado.innerHTML = "<h1 class='naovalido'>Formulário não valido!</h1>"
        a.style.border = "1px solid #dd0000"
        b.style.border = "1px solid #dd0000"
    }
}