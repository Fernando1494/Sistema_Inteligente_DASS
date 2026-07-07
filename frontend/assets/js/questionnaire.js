// Elementos

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

const step1Buttons = document.getElementById("step1Buttons");
const step2Buttons = document.getElementById("step2Buttons");

const progressBar = document.getElementById("progressBar");

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");

const form = document.getElementById("questionnaireForm");

// ----------------------------
// Paso 1 -> Paso 2
// ----------------------------

nextButton.addEventListener("click", () => {

    if (!form.checkValidity()) {

        form.reportValidity();
        return;

    }

    step1.classList.add("d-none");
    step2.classList.remove("d-none");

    step1Buttons.classList.add("d-none");
    step2Buttons.classList.remove("d-none");

    progressBar.style.width = "100%";
    progressBar.textContent = "Paso 2 de 2";

});

// ----------------------------
// Paso 2 -> Paso 1
// ----------------------------

previousButton.addEventListener("click", () => {

    step2.classList.add("d-none");
    step1.classList.remove("d-none");

    step2Buttons.classList.add("d-none");
    step1Buttons.classList.remove("d-none");

    progressBar.style.width = "50%";
    progressBar.textContent = "Paso 1 de 2";

});