import { loadPrediction } from "./api.js";

// ==========================================================
// INICIALIZACIÓN
// ==========================================================

document.addEventListener("DOMContentLoaded", initializeResults);


// ==========================================================
// CARGAR RESULTADOS
// ==========================================================

function initializeResults() {

    const result = loadPrediction();

    if (!result) {

        alert("No se encontraron resultados de la evaluación.");

        window.location.href = "questionnaire.html";

        return;

    }

    showQuestionnaireResults(result.questionnaire);

    showPredictionResults(result.prediction);

    showRecommendations(result.questionnaire);

    showDisclaimer(result.disclaimer);

    showGeneralInterpretation(result);

}


// ==========================================================
// RESULTADOS DASS-21
// ==========================================================

function showQuestionnaireResults(questionnaire) {


    setLevelBadge(
        "questionnaireDepression",
        questionnaire.depression.level
    );

    document.getElementById("questionnaireDepressionScore").textContent =
        `Puntaje: ${questionnaire.depression.score}`;



    setLevelBadge(
        "questionnaireAnxiety",
        questionnaire.anxiety.level
    );

    document.getElementById("questionnaireAnxietyScore").textContent =
        `Puntaje: ${questionnaire.anxiety.score}`;



    setLevelBadge(
        "questionnaireStress",
        questionnaire.stress.level
    );

    document.getElementById("questionnaireStressScore").textContent =
        `Puntaje: ${questionnaire.stress.score}`;

}


// ==========================================================
// PREDICCIÓN DEL MODELO
// ==========================================================

function showPredictionResults(prediction) {


    setLevelBadge(
        "predictionDepression",
        prediction.depression.level
    );


    setLevelBadge(
        "predictionAnxiety",
        prediction.anxiety.level
    );


    setLevelBadge(
        "predictionStress",
        prediction.stress.level
    );


}


// ==========================================================
// BADGES DINÁMICOS SEGÚN NIVEL
// ==========================================================

function setLevelBadge(elementId, level) {


    const element = document.getElementById(elementId);


    if (!element) return;


    element.textContent = level;


    element.className = "badge";


    const normalized = level
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");


    if (normalized.includes("normal")) {

        element.classList.add("bg-success");

    }

    else if (normalized.includes("leve")) {

        element.classList.add("bg-warning", "text-dark");

    }

    else if (normalized.includes("moderado")) {

        element.classList.add("bg-warning", "text-dark");

    }

    else if (
        normalized.includes("severo") &&
        !normalized.includes("extremadamente")
    ) {

        element.classList.add("bg-danger");

    }

    else if (normalized.includes("extremadamente")) {

        element.classList.add("bg-dark");

    }

    else {

        element.classList.add("bg-secondary");

    }

}


// ==========================================================
// RECOMENDACIONES
// ==========================================================

function showRecommendations(questionnaire) {

    const list = document.getElementById("recommendations");

    list.innerHTML = "";


    addRecommendation(
        list,
        "Depresión",
        questionnaire.depression.recommendation
    );


    addRecommendation(
        list,
        "Ansiedad",
        questionnaire.anxiety.recommendation
    );


    addRecommendation(
        list,
        "Estrés",
        questionnaire.stress.recommendation
    );

}


function addRecommendation(container, title, recommendation) {


    const item = document.createElement("li");


    item.className = "list-group-item";


    item.innerHTML = `

        <strong>${title}</strong><br>

        ${recommendation}

    `;


    container.appendChild(item);

}


// ==========================================================
// INTERPRETACIÓN GENERAL
// ==========================================================

function showGeneralInterpretation(result) {


    const interpretation =
        document.getElementById("generalInterpretation");


    const depression =
        result.questionnaire.depression.level;


    const anxiety =
        result.questionnaire.anxiety.level;


    const stress =
        result.questionnaire.stress.level;


    interpretation.innerHTML = `

        El cuestionario DASS-21 identifica los siguientes niveles:

        <strong>Depresión:</strong> ${depression},

        <strong>Ansiedad:</strong> ${anxiety} y

        <strong>Estrés:</strong> ${stress}.

        <br><br>

        La predicción obtenida mediante el modelo de Machine Learning

        se muestra en la sección correspondiente para fines de apoyo

        a la evaluación.

    `;

}


// ==========================================================
// DISCLAIMER
// ==========================================================

function showDisclaimer(text) {

    document.getElementById("disclaimer").textContent = text;

}