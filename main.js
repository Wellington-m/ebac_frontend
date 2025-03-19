$(document).ready(() => {
    $("#slick_carrousel").slick();

    $(".burger_menu").on("click", () => {
        $("nav").slideToggle();
    });

    $("#telephone").mask("(00) 00000-0000");

    $("form").validate({
        rules: {
            name: {
                required: true,
            },
            telephone: {
                required: true,
            },
            email: {
                required: true,
            },
            vehicle: {
                required: true,
            },
        },
        messages: {
            name: "Este campo é obrigatório",
        },
        submitHandler: (form) => {
            console.log("Enviado");
        },
    });
});
