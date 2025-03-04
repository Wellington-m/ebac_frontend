const activityForm = document.getElementById("activityForm");
const happyEmoji = "src='./images/aprovado.png' alt='Emoji festejando'";
const sadEmoji = 'src="./images/reprovado.png" alt="Emoji triste"';
const activities = [];

let linhas = "";

activityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const activityName = document.getElementById("activityName");
    const activityValue = document.getElementById("activityValue");

    let linha = `<tr>`;
    linha += `<td>${activityName.value}</td>`;
    linha += `<td>${activityValue.value}</td>`;
    linha += `<td>`;
    linha += `<img ${activityValue.value >= 7 ? happyEmoji : sadEmoji}/>`;
    linha += `</td>`;
    linha += `</tr>`;

    linhas += linha;

    const contentForm = document.querySelector("tbody");
    contentForm.innerHTML = linhas;

    activities.push({
        activityName: activityName.value,
        activityNote: parseFloat(activityValue.value),
    });

    const activityNotes = activities.map((value) => value.activityNote);
    const average = activityNotes.length
        ? activityNotes.reduce((acc, curr) => (acc += curr), 0) /
          activityNotes.length
        : 0;

    const averageElement = document.getElementById("average");

    averageElement.innerHTML = average;

    activityName.value = "";
    activityValue.value = "";
});
