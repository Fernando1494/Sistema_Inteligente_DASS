// ==========================================================
// SISTEMA INTELIGENTE DASS
// Archivo: questions.js
// Descripción:
// Configuración del cuestionario DASS-21.
// Contiene las instrucciones, opciones de respuesta,
// preguntas demográficas y preguntas DASS-21.
// ==========================================================


// ==========================================================
// INSTRUCCIONES DEL CUESTIONARIO
// ==========================================================

const instructions = {
    title: "Cuestionario DASS-21",
    description:
        "Por favor, lea cuidadosamente cada una de las siguientes afirmaciones e indique en qué medida se aplicó a usted durante los últimos 7 días. No existen respuestas correctas o incorrectas."
};


// ==========================================================
// OPCIONES DE RESPUESTA
// ==========================================================

const responseOptions = [

    {
        value: 0,
        label: "Nada aplicable a mí / Nunca"
    },

    {
        value: 1,
        label: "Aplicable a mí en algún grado / A veces"
    },

    {
        value: 2,
        label: "Aplicable a mí en un grado considerable / A menudo"
    },

    {
        value: 3,
        label: "Muy aplicable a mí / Casi siempre"
    }

];


// ==========================================================
// PREGUNTAS DEMOGRÁFICAS (Q1)
// Basadas en el dataset utilizado para entrenar el modelo.
// ==========================================================

const demographicQuestions = [

    {
        id: "Q1_1",
        label: "Edad",
        type: "number",
        required: true,
        min: 15,
        max: 100
    },

    {
        id: "Q1_2",
        label: "Sexo",
        type: "radio",
        required: true,
        options: [
            { value: 1, label: "Masculino" },
            { value: 2, label: "Femenino" }
        ]
    },

    {
        id: "Q1_3",
        label: "Estado civil",
        type: "radio",
        required: true,
        options: [
            { value: 0, label: "Soltero(a)" },
            { value: 1, label: "Casado(a)" }
        ]
    },

    {
        id: "Q1_4",
        label: "Nivel educativo",
        type: "select",
        required: true,
        options: [
            { value: 1, label: "Analfabeto" },
            { value: 2, label: "Primaria" },
            { value: 3, label: "Secundaria" },
            { value: 4, label: "Educación superior" },
            { value: 5, label: "Posgrado" }
        ]
    },

    {
        id: "Q1_5",
        label: "Situación ocupacional",
        type: "select",
        required: true,
        options: [
            { value: 1, label: "Ama de casa" },
            { value: 2, label: "Empleado(a) de servicios" },
            { value: 3, label: "Empresario(a)" },
            { value: 4, label: "Estudiante" },
            { value: 5, label: "Jornalero(a)" },
            { value: 6, label: "Desempleado(a)" }
        ]
    },

    {
        id: "Q1_6",
        label: "¿Ha tenido problemas para dormir?",
        type: "radio",
        required: true,
        options: [
            { value: 0, label: "No" },
            { value: 1, label: "Sí" }
        ]
    }

];


// ==========================================================
// PREGUNTAS DASS-21
// Orden oficial del cuestionario.
// datasetId corresponde al orden utilizado en el dataset.
// ==========================================================

const dassQuestions = [

    {
        order: 1,
        datasetId: "Q3_1",
        code: "S1",
        dimension: "Estrés",
        category: "stress",
        text: "Me ha costado mucho descargar la tensión."
    },

    {
        order: 2,
        datasetId: "Q3_8",
        code: "A1",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "He notado la boca seca."
    },

    {
        order: 3,
        datasetId: "Q3_15",
        code: "D1",
        dimension: "Depresión",
        category: "depression",
        text: "No he podido sentir ninguna emoción positiva."
    },

    {
        order: 4,
        datasetId: "Q3_9",
        code: "A2",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "Me ha costado respirar (por ejemplo, respiración excesivamente rápida o sensación de falta de aire)."
    },

    {
        order: 5,
        datasetId: "Q3_16",
        code: "D2",
        dimension: "Depresión",
        category: "depression",
        text: "Me ha resultado difícil tener iniciativa para hacer cosas."
    },

    {
        order: 6,
        datasetId: "Q3_2",
        code: "S2",
        dimension: "Estrés",
        category: "stress",
        text: "He reaccionado exageradamente en determinadas situaciones."
    },

    {
        order: 7,
        datasetId: "Q3_10",
        code: "A3",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "He experimentado temblores (por ejemplo, en las manos)."
    },

    {
        order: 8,
        datasetId: "Q3_3",
        code: "S3",
        dimension: "Estrés",
        category: "stress",
        text: "He sentido que estaba utilizando mucha energía nerviosa."
    },

    {
        order: 9,
        datasetId: "Q3_11",
        code: "A4",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "He estado preocupado(a) por situaciones en las que podía tener pánico o hacer el ridículo."
    },

    {
        order: 10,
        datasetId: "Q3_17",
        code: "D3",
        dimension: "Depresión",
        category: "depression",
        text: "He sentido que no tenía nada que esperar con ilusión."
    },

    {
        order: 11,
        datasetId: "Q3_4",
        code: "S4",
        dimension: "Estrés",
        category: "stress",
        text: "Me he sentido inquieto(a)."
    },

        {
        order: 12,
        datasetId: "Q3_5",
        code: "S5",
        dimension: "Estrés",
        category: "stress",
        text: "Me ha resultado difícil relajarme."
    },

    {
        order: 13,
        datasetId: "Q3_18",
        code: "D4",
        dimension: "Depresión",
        category: "depression",
        text: "Me he sentido triste y deprimido(a)."
    },

    {
        order: 14,
        datasetId: "Q3_6",
        code: "S6",
        dimension: "stress",
        category: "stress",
        text: "No he tolerado que algo interrumpiera lo que estaba haciendo."
    },

    {
        order: 15,
        datasetId: "Q3_12",
        code: "A5",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "He sentido que estaba a punto de entrar en pánico."
    },

    {
        order: 16,
        datasetId: "Q3_19",
        code: "D5",
        dimension: "Depresión",
        category: "depression",
        text: "No he podido entusiasmarme por nada."
    },

    {
        order: 17,
        datasetId: "Q3_20",
        code: "D6",
        dimension: "Depresión",
        category: "depression",
        text: "He sentido que valía muy poco como persona."
    },

    {
        order: 18,
        datasetId: "Q3_7",
        code: "S7",
        dimension: "Estrés",
        category: "stress",
        text: "Me he sentido bastante irritable."
    },

    {
        order: 19,
        datasetId: "Q3_13",
        code: "A6",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "He sentido los latidos de mi corazón sin haber realizado esfuerzo físico (por ejemplo, palpitaciones o aumento de la frecuencia cardíaca)."
    },

    {
        order: 20,
        datasetId: "Q3_14",
        code: "A7",
        dimension: "Ansiedad",
        category: "anxiety",
        text: "He sentido miedo sin una razón justificada."
    },

    {
        order: 21,
        datasetId: "Q3_21",
        code: "D7",
        dimension: "Depresión",
        category: "depression",
        text: "He sentido que la vida no tenía sentido."
    }

];


// ==========================================================
// EXPORTACIONES
// ==========================================================

export {
    instructions,
    responseOptions,
    demographicQuestions,
    dassQuestions
};