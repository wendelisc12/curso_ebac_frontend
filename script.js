$("document").ready(function(){
    
    $("#box").fadeIn()


    $("#addTarefa").click(()=>{
        $("form").slideToggle()
    })

    $("#add").click((e)=>{
        e.preventDefault()
        var tarefa = $("#inputTarefa").val()
        $(`<li class="item">${tarefa}</li>`).appendTo("#lista").fadeIn()
        $(".item").click(function(e){
            const itemSelecionado = e.target
            itemSelecionado.style.textDecoration = "line-through"
        })
    })
    
})