$(document).ready(() => {
    const priorityImages = {
        high_priority_input: {
            src: "./images/High_priority.svg",
            alt: "Um polígono vermelho",
        },
        medium_priority_input: {
            src: "./images/Medium_priority.svg",
            alt: "Um polígono amarelo",
        },
        low_priority_input: {
            src: "./images/Low_priority.svg",
            alt: "Um polígono azul",
        },
    };

    $("form").on("submit", (e) => {
        e.preventDefault();
        const todoValue = $("#todoValue").val();
        const priority = $("input[name='priority']:checked").val();
        const newItem = $("<li class='todo-item'></li>");
        $(`<h1 class='todo-title'>
            ${todoValue}
            </h1>`).appendTo(newItem);

        $(`<img
                src=${priorityImages[priority].src}
                alt=${priorityImages[priority].alt}
            />`).appendTo(newItem);

        $(newItem).on("click", (e) => {
            $(e.currentTarget).find("h1").toggleClass("crossed-text");
        });

        $(newItem).appendTo("ul");

        $("#todoValue").val("");
    });
});
