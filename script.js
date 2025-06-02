$(document).ready(function () {
    const element = "<div class='alert alert-danger'></div>";

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
        errorElement: "div", // substitui <label> de erro padrão por <div>
        errorClass: "alert alert-danger", //Adiciona as classes para estilizar a <div>
        highlight: function (element) {
            $(element).addClass("is-invalid"); // Classe Bootstrap para input inválido
        },
        unhighlight: function (element) {
            $(element).removeClass("is-invalid"); // Remove quando válido
        },
    });

    $("#theme").on("click", function () {
        const theme = $("body").attr("data-bs-theme");
        changeTheme(theme);
    });

    const changeTheme = (theme) => {
        if (theme === "light") {
            $("body").attr("data-bs-theme", "dark");
            $("#theme").text("light_mode");
        } else {
            $("body").attr("data-bs-theme", "light");
            $("#theme").text("dark_mode");
        }
    };
});
