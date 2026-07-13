// ==========================================================
// SISTEMA INTELIGENTE DASS
// Archivo: questionnaire.js
// Descripción:
// Controlador principal del cuestionario DASS-21.
// Genera dinámicamente las preguntas,
// controla la navegación,
// recopila las respuestas y
// envía la información al backend.
// ==========================================================

import {
    instructions,
    responseOptions,
    dassQuestions
} from "./questions.js";

import { predict, savePrediction } from "./api.js";


// ==========================================================
// ELEMENTOS DEL DOM
// ==========================================================

const form = document.getElementById("questionnaireForm");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

const step1Buttons = document.getElementById("step1Buttons");
const step2Buttons = document.getElementById("step2Buttons");

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");

const progressBar = document.getElementById("progressBar");

const questionsContainer =
    document.getElementById("questionsContainer");


// ==========================================================
// INICIALIZACIÓN
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

    renderDassQuestions();

    configureEvents();

});


// ==========================================================
// CONFIGURACIÓN DE EVENTOS
// ==========================================================

function configureEvents() {

    nextButton.addEventListener(
        "click",
        goToStep2
    );

    previousButton.addEventListener(
        "click",
        goToStep1
    );

    form.addEventListener(
        "submit",
        submitQuestionnaire
    );

}


// ==========================================================
// GENERAR PREGUNTAS DASS-21
// ==========================================================

function renderDassQuestions() {

    questionsContainer.innerHTML = "";

    dassQuestions.forEach(question => {

        const card = document.createElement("div");

        card.className = "card mb-4 shadow-sm";

        const cardBody = document.createElement("div");

        cardBody.className = "card-body";

        const title = document.createElement("h6");

        title.className = "fw-bold";

        title.textContent =
            `${question.order}. ${question.text}`;

        cardBody.appendChild(title);

        const subtitle = document.createElement("p");

        subtitle.className =
            "text-muted small mb-3";

        subtitle.textContent =
            `Dimensión: ${question.dimension}`;

        cardBody.appendChild(subtitle);


        responseOptions.forEach(option => {

            const div =
                document.createElement("div");

            div.className = "form-check";

            const input =
                document.createElement("input");

            input.className =
                "form-check-input";

            input.type = "radio";

            input.name = question.datasetId;

            input.value = option.value;

            input.required = true;

            input.id =
                `${question.datasetId}_${option.value}`;

            const label =
                document.createElement("label");

            label.className =
                "form-check-label";

            label.setAttribute(
                "for",
                input.id
            );

            label.textContent =
                option.label;

            div.appendChild(input);

            div.appendChild(label);

            cardBody.appendChild(div);

        });

        card.appendChild(cardBody);

        questionsContainer.appendChild(card);

    });

}


// ==========================================================
// PASO 1
// ==========================================================

function goToStep2() {

    if (!validateStep1()) {

        return;

    }

    step1.classList.add("d-none");

    step2.classList.remove("d-none");

    step1Buttons.classList.add("d-none");

    step2Buttons.classList.remove("d-none");

    progressBar.style.width = "100%";

    progressBar.textContent =
        "Paso 2 de 2";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ==========================================================
// PASO 2
// ==========================================================

function goToStep1() {

    step2.classList.add("d-none");

    step1.classList.remove("d-none");

    step2Buttons.classList.add("d-none");

    step1Buttons.classList.remove("d-none");

    progressBar.style.width = "50%";

    progressBar.textContent =
        "Paso 1 de 2";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ==========================================================
// VALIDAR PASO 1
// ==========================================================

function validateStep1() {

    const requiredFields = [

        document.getElementById("Q1_1"),
        document.getElementById("Q1_4"),
        document.getElementById("Q1_5")

    ];

    for (const field of requiredFields) {

        if (!field.checkValidity()) {

            field.reportValidity();

            return false;

        }

    }

    if (!document.querySelector('input[name="Q1_2"]:checked')) {

        alert("Seleccione el sexo.");

        return false;

    }

    if (!document.querySelector('input[name="Q1_3"]:checked')) {

        alert("Seleccione el estado civil.");

        return false;

    }

    if (!document.querySelector('input[name="Q1_6"]:checked')) {

        alert("Indique si ha tenido problemas para dormir.");

        return false;

    }

    return true;

}

// ==========================================================
// OBTENER DATOS DEMOGRÁFICOS
// ==========================================================

function getDemographicData() {

    return {

        // Edad
        Q1_1: Number(
            document.getElementById("Q1_1").value
        ),

        // Sexo
        Q1_2: Number(
            document.querySelector(
                'input[name="Q1_2"]:checked'
            ).value
        ),

        // Estado civil
        Q1_3: Number(
            document.querySelector(
                'input[name="Q1_3"]:checked'
            ).value
        ),

        // Nivel educativo
        Q1_4: Number(
            document.getElementById("Q1_4").value
        ),

        // Situación ocupacional
        Q1_5: Number(
            document.getElementById("Q1_5").value
        ),

        // Problemas para dormir
        Q1_6: Number(
            document.querySelector(
                'input[name="Q1_6"]:checked'
            ).value
        )

    };

}

// ==========================================================
// OBTENER RESPUESTAS DASS
// ==========================================================

function getDassResponses() {

    const responses = {};

    dassQuestions.forEach(question => {

        const selected = document.querySelector(

            `input[name="${question.datasetId}"]:checked`

        );

        if (!selected) {

            throw new Error(

                `Debe responder la pregunta ${question.order}.`

            );

        }

        const backendField =
            `${question.datasetId}_${question.code}`;

        responses[backendField] =
            Number(selected.value);

    });

    return responses;

}


// ==========================================================
// CONSTRUIR REQUEST
// ==========================================================

function buildPredictionRequest() {

    return {

        ...getDemographicData(),

        ...getDassResponses()

    };

}


// ==========================================================
// ENVIAR CUESTIONARIO
// ==========================================================

async function submitQuestionnaire(event) {

    event.preventDefault();

    try {

        const request =
            buildPredictionRequest();

        console.log("PredictionRequest:");

        console.table(request);

        const result =
            await predict(request);

        savePrediction(result);

        window.location.href =
            "results.html";

    }

    catch (error) {

        console.error(error);

        alert(

            error.message ||

            "Ocurrió un error al enviar la evaluación."

        );

    }

}





// ==========================================================
// UTILIDADES
// ==========================================================

export function clearQuestionnaire() {

    form.reset();

    goToStep1();

}


export function getCurrentAnswers() {

    return buildPredictionRequest();

}