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

    updateDimension(
        "questionnaireDepression",
        "questionnaireDepressionScore",
        "questionnaireDepressionBar",
        questionnaire.depression
    );

    updateDimension(
        "questionnaireAnxiety",
        "questionnaireAnxietyScore",
        "questionnaireAnxietyBar",
        questionnaire.anxiety
    );

    updateDimension(
        "questionnaireStress",
        "questionnaireStressScore",
        "questionnaireStressBar",
        questionnaire.stress
    );

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
// ACTUALIZAR UNA DIMENSIÓN
// ==========================================================

function updateDimension(
    levelId,
    scoreId,
    progressId,
    data
) {

    setLevelBadge(levelId, data.level);

    document.getElementById(scoreId).textContent =
        `Puntaje: ${data.score} de 42`;

    updateProgressBar(progressId, data.score);

}

// ==========================================================
// BADGES
// ==========================================================

function setLevelBadge(elementId, level) {

    const element = document.getElementById(elementId);

    if (!element) return;

    element.textContent = level;

    element.className = "badge fs-6";

    const normalized = level
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (normalized.includes("normal")) {

        element.classList.add(
            "bg-success"
        );

    }

    else if (normalized.includes("leve")) {

        element.classList.add(
            "bg-warning",
            "text-dark"
        );

    }

    else if (normalized.includes("moderado")) {

        element.classList.add(
            "bg-warning",
            "text-dark"
        );

    }

    else if (
        normalized.includes("severo") &&
        !normalized.includes("extremadamente")
    ) {

        element.classList.add(
            "bg-danger"
        );

    }

    else if (
        normalized.includes("extremadamente")
    ) {

        element.classList.add(
            "bg-dark"
        );

    }

    else {

        element.classList.add(
            "bg-secondary"
        );

    }

}

// ==========================================================
// BARRAS DE PROGRESO
// ==========================================================

function updateProgressBar(id, score) {

    const bar = document.getElementById(id);

    if (!bar) return;

    const percentage = Math.min(
        (score / 42) * 100,
        100
    );

    bar.style.width = `${percentage}%`;

    bar.setAttribute(
        "aria-valuenow",
        score
    );

    bar.textContent = `${Math.round(percentage)}%`;

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

    const interpretation = document.getElementById(
        "generalInterpretation"
    );

    const depression =
        result.questionnaire.depression.level;

    const anxiety =
        result.questionnaire.anxiety.level;

    const stress =
        result.questionnaire.stress.level;

    interpretation.innerHTML = `

        <strong>Resumen de la evaluación</strong>

        <br><br>

        El cuestionario DASS-21 identifica los siguientes niveles:

        <ul class="mt-2 mb-2">

            <li>
                <strong>Depresión:</strong> ${depression}
            </li>

            <li>
                <strong>Ansiedad:</strong> ${anxiety}
            </li>

            <li>
                <strong>Estrés:</strong> ${stress}
            </li>

        </ul>

        La predicción obtenida mediante el modelo de
        <strong>Machine Learning</strong> se presenta como una
        herramienta de apoyo para la detección temprana del
        riesgo y no sustituye una evaluación realizada por un
        profesional de la salud mental.

    `;

}

// ==========================================================
// DISCLAIMER
// ==========================================================

function showDisclaimer(text) {

    document.getElementById("disclaimer").textContent =
        text;

}