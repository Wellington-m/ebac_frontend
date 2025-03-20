$(() => {
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
            console.log("Enviado", form);
        },
    });

    $(".vehicle-list button").on("click", function () {
        //Não da pra usar Arrow function com o "this"
        const destiny = $("#contact");

        const text = $(this).parent().find("h3").text();

        $("#vehicle").val(text);

        $("html, body").animate(
            {
                scrollTop: destiny.offset().top,
            },
            1000
        );
    });
});
