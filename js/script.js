$("document").ready(function(){
    
    $("#telefone").mask("(00)00000-0000")
    $("#cpf").mask("000.000.000-00")
    $("#cep").mask("00000-000")

    $("form").validate({
        rules:{
            nome:{required: true},
            email: {required:true},
            telefone: {required:true},
            cpf: {required:true},
            endereco: {required:true},
            bairro: {required:true},
            cidade: {required:true},
            cep: {required:true},
        },
        messages:{
            nome: "Insira seu nome completo",
            email: "Insira seu e-mail",
            telefone: "Insira seu telefone",
            cpf: "Insira seu cpf",
            endereco: "Insira seu endereco",
            bairro: "Insira seu bairro",
            cidade: "Insira seu cidade",
            cep: "Insira seu cep",
        },
        submitHandler: function(form){
            alert("cadastro realizado com sucesso")
        }
    })

})