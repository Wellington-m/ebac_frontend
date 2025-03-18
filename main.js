$(document).ready(() => {
    $("#slick_carrousel").slick();

    $(".burger_menu").on("click", () => {
        $("nav").slideToggle();
    });
});
