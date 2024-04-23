var contador = 0

document.getElementById("mais").addEventListener("click", ()=>{
    contador ++
    document.getElementById("contador-numero").innerHTML = contador
})

document.getElementById("menos").addEventListener("click", ()=>{
    contador --
    document.getElementById("contador-numero").innerHTML = contador
})

