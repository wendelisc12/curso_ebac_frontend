$("document").ready(()=>{
    $("#form-login").validate({
        rules:{
            email: {required: true},
            senha: {required: true}
        },messages:{
            email: "Por favor digite seu email",
            senha: "digite sua senha"
        }
    })
})