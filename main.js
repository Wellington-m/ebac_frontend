const activityForm = document.getElementById("activityForm");
const happyEmoji = "src='./images/aprovado.png' alt='Emoji festejando'";
const sadEmoji = 'src="./images/reprovado.png" alt="Emoji triste"';
const activities = [];
const spanApproved = '<span class="resultado aprovado">Aprovado</span>';
const spanFailed = '<span class="resultado reprovado">Reprovado</span>';
const MINIMUMGRADE = 7;

activityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    includeActivity();

    calculateAverage();

    selectAllRemoveButtons();
});

const includeActivity = () => {
    const activityName = document.getElementById("activityName");
    const activityValue = document.getElementById("activityValue");

    const allActivitiesName = activities.map(
        (activity) => activity.activityName
    );

    if (allActivitiesName.includes(activityName.value)) {
        alert(`A atividade "${activityName.value}" já foi inserida`);
    } else {
        let linha = `<tr>`;
        linha += `<td>${activityName.value}</td>`;
        linha += `<td>${activityValue.value}</td>`;
        linha += `<td>`;
        linha += `<img ${
            activityValue.value >= MINIMUMGRADE ? happyEmoji : sadEmoji
        }/>`;
        linha += `</td>`;
        linha += `<td>`;
        linha += `<i class="material-icons remove-btn" style="font-size:36px;color:red">delete</i>`;
        linha += `</td>`;
        linha += `</tr>`;

        const contentForm = document.querySelector("tbody");
        contentForm.innerHTML += linha;

        activities.push({
            activityName: activityName.value,
            activityNote: parseFloat(activityValue.value),
        });

        activityName.value = "";
        activityValue.value = "";
    }
};

const calculateAverage = () => {
    const activityNotes = activities.map((value) => value.activityNote);
    const average = activityNotes.length
        ? activityNotes.reduce((acc, curr) => (acc += curr), 0) /
          activityNotes.length
        : 0;

    const averageElement = document.getElementById("average");

    averageElement.innerHTML = average;

    calculateResult(average);
};

const calculateResult = (average) => {
    const result = document.getElementById("result");

    average >= MINIMUMGRADE
        ? (result.innerHTML = spanApproved)
        : (result.innerHTML = spanFailed);
};

const selectAllRemoveButtons = () => {
    document.querySelectorAll(".remove-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const row = e.target.closest("tr"); // Encontra a linha mais próxima
            const activityName = row.children[0].textContent; // Obtém o nome da atividade
            activities.splice(
                activities.findIndex(
                    (activity) => activity.activityName === activityName
                ),
                1
            );
            row.remove();
            calculateAverage();
        });
    });
};
