// ==========================================================
// RESULTS.JS
// Sistema Inteligente DASS
// ==========================================================

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

    document.getElementById("questionnaireDepression").textContent =
        questionnaire.depression.level;

    document.getElementById("questionnaireDepressionScore").textContent =
        `Puntaje: ${questionnaire.depression.score}`;

    document.getElementById("questionnaireAnxiety").textContent =
        questionnaire.anxiety.level;

    document.getElementById("questionnaireAnxietyScore").textContent =
        `Puntaje: ${questionnaire.anxiety.score}`;

    document.getElementById("questionnaireStress").textContent =
        questionnaire.stress.level;

    document.getElementById("questionnaireStressScore").textContent =
        `Puntaje: ${questionnaire.stress.score}`;

}

// ==========================================================
// PREDICCIÓN DEL MODELO
// ==========================================================

function showPredictionResults(prediction) {

    document.getElementById("predictionDepression").textContent =
        prediction.depression.level;

    document.getElementById("predictionAnxiety").textContent =
        prediction.anxiety.level;

    document.getElementById("predictionStress").textContent =
        prediction.stress.level;

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

    const interpretation = document.getElementById("generalInterpretation");

    const depression = result.questionnaire.depression.level;

    const anxiety = result.questionnaire.anxiety.level;

    const stress = result.questionnaire.stress.level;

    interpretation.innerHTML = `

        El cuestionario DASS-21 identifica los siguientes niveles:
        <strong>Depresión:</strong> ${depression},
        <strong>Ansiedad:</strong> ${anxiety} y
        <strong>Estrés:</strong> ${stress}.
        <br><br>
        La predicción obtenida mediante el modelo de Machine Learning
        se muestra en la sección correspondiente para fines de apoyo a la
        evaluación.

    `;

}

// ==========================================================
// DISCLAIMER
// ==========================================================

function showDisclaimer(text) {

    document.getElementById("disclaimer").textContent = text;

}