$(document).ready(function () {
    $("#cellphone").mask("(00) 00000-0000");

    $("#form-contact").validate({
        rules: {
            cellphone: {
                minlength: 15,
            },
        },
        messages: {
            name: {
                required: "O nome é obrigatório",
                minlength: "O nome precisa precisa ter no mínimo 3 caracteres",
            },
            email: {
                required: "O email é obrigatório",
                email: "Insira um e-mail válido",
            },
            cellphone: {
                required: "O telefone é obrigatório",
                minlength: "O telefone deve ter 11 digitos incluindo DDD",
            },
        },
        submitHandler: function (form) {
            alert("Informações enviadas com sucesso");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            var errorMessages = validator.errorList.map(function (erro) {
                return erro.message;
            });

            if (errorMessages.length > 0) {
                alert(errorMessages.join("\n"));
            }
        },
        errorPlacement: function (error, element) {
            //Não injeta a label de erro do JQuery no HTML, pois da conflito com a estilização da label pelo bootstrap
        },
    });
});
