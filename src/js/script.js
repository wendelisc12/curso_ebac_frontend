$("document").ready(()=>{
    $("#form-login").validate({
        rules:{
            email: {required: true},
            senha: {required: true}
        }
    })
})