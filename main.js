const form = document.getElementById("form_number");
const numberOne = document.getElementById("number_one");
const numberTwo = document.getElementById("number_two");

numberOne.addEventListener("input", () => {
    validateNumbers();
});

numberTwo.addEventListener("input", () => {
    validateNumbers();
});

const validateNumbers = () => {
    const numberOne = parseFloat(document.getElementById("number_one").value);
    const numberTwo = parseFloat(document.getElementById("number_two").value);
    console.log("Numero 1", isNaN(numberOne));
    console.log("Numero 2", isNaN(numberTwo));

    if (!(numberTwo > numberOne)) {
        document.getElementById("message").classList.remove("success");
        document.getElementById("message").classList.add("error");
        defineMessage("O número dois deve ser maior que o número um");
        document.getElementById("submit_button").disabled = true;
    } else {
        document.getElementById("message").classList.remove("error");
        document.getElementById("message").classList.add("success");
        defineMessage("Tudo certo, pode enviar o formulário");
        document.getElementById("submit_button").disabled = false;
    }

    if (isNaN(numberOne) && isNaN(numberTwo)) {
        document.getElementById("message").classList.remove("success");
        document.getElementById("message").classList.remove("error");
        console.log("HUMMMMMM");
    }
};

const defineMessage = (message) => {
    document.getElementById("message").innerHTML = message;
};

const cleanForm = () => {
    numberOne.value = "";
    numberTwo.value = "";
    document.getElementById("message").classList.remove("success");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulário enviado");
    cleanForm();
});
