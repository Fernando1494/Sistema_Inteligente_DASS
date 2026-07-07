// ==========================================================
// SISTEMA INTELIGENTE DASS
// Archivo: api.js
// Descripción:
// Funciones para comunicarse con la API del backend.
// ==========================================================

// ==========================================================
// CONFIGURACIÓN
// ==========================================================

// URL base del backend FastAPI
const API_BASE_URL = "http://127.0.0.1:8000";

// Endpoint de predicción
const PREDICT_ENDPOINT = `${API_BASE_URL}/predict`;


// ==========================================================
// FUNCIÓN DE PREDICCIÓN
// ==========================================================

export async function predict(data) {

    try {

        const response = await fetch(PREDICT_ENDPOINT, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        if (!response.ok) {

            let message = "Error al comunicarse con el servidor.";

            try {

                const error = await response.json();

                if (error.detail) {

                    message = error.detail;

                }

            } catch {

                // Si la respuesta no es JSON,
                // se mantiene el mensaje por defecto.

            }

            throw new Error(message);

        }

        return await response.json();

    }

    catch (error) {

        console.error("Error API:", error);

        throw error;

    }

}