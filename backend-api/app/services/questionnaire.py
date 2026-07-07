from app.core.constants import LEVELS

# ==========================================================
# Preguntas de cada dimensión del DASS-21
# ==========================================================

DEPRESSION_ITEMS = [
    "Q3_15_D1",
    "Q3_16_D2",
    "Q3_17_D3",
    "Q3_18_D4",
    "Q3_19_D5",
    "Q3_20_D6",
    "Q3_21_D7"
]

ANXIETY_ITEMS = [
    "Q3_8_A1",
    "Q3_9_A2",
    "Q3_10_A3",
    "Q3_11_A4",
    "Q3_12_A5",
    "Q3_13_A6",
    "Q3_14_A7"
]

STRESS_ITEMS = [
    "Q3_1_S1",
    "Q3_2_S2",
    "Q3_3_S3",
    "Q3_4_S4",
    "Q3_5_S5",
    "Q3_6_S6",
    "Q3_7_S7"
]

# ==========================================================
# Recomendaciones generales
# ==========================================================

RECOMMENDATIONS = {

    1: (
        "No se evidencian indicadores significativos. Mantenga hábitos "
        "saludables, una alimentación equilibrada, actividad física regular "
        "y un adecuado descanso."
    ),

    2: (
        "Se recomienda prestar atención a los síntomas y fortalecer hábitos "
        "de autocuidado. Si los síntomas persisten, considere buscar "
        "orientación profesional."
    ),

    3: (
        "Se recomienda realizar una evaluación con un profesional de salud "
        "mental para una valoración más detallada y seguimiento."
    ),

    4: (
        "Se recomienda acudir a un profesional de salud mental lo antes "
        "posible para recibir una evaluación clínica y orientación."
    ),

    5: (
        "Se recomienda buscar atención profesional de forma prioritaria. "
        "Si los síntomas generan riesgo para su seguridad o la de otras "
        "personas, acuda inmediatamente a un servicio de emergencias o "
        "contacte a un familiar o persona de confianza."
    )

}

# ==========================================================
# Aviso importante
# ==========================================================

DISCLAIMER = (
    "Este sistema constituye una herramienta de apoyo basada en el "
    "cuestionario DASS-21 y técnicas de Machine Learning. Los resultados "
    "obtenidos son únicamente orientativos y no constituyen un diagnóstico "
    "clínico, por lo que no sustituyen la evaluación realizada por un "
    "profesional de la salud mental."
)

# ==========================================================
# Calcular puntajes
# ==========================================================

def calculate_scores(data):
    """
    Calcula los puntajes oficiales del DASS-21.

    El DASS-21 utiliza 21 preguntas (7 por dimensión).
    El puntaje obtenido se multiplica por 2 para ser
    equivalente al DASS-42.
    """

    depression_score = (
        sum(data[item] for item in DEPRESSION_ITEMS) * 2
    )

    anxiety_score = (
        sum(data[item] for item in ANXIETY_ITEMS) * 2
    )

    stress_score = (
        sum(data[item] for item in STRESS_ITEMS) * 2
    )

    return {
        "depression": depression_score,
        "anxiety": anxiety_score,
        "stress": stress_score
    }

# ==========================================================
# Clasificación oficial DASS-21
# ==========================================================

def classify_depression(score):

    if score <= 9:
        return 1
    elif score <= 13:
        return 2
    elif score <= 20:
        return 3
    elif score <= 27:
        return 4
    else:
        return 5


def classify_anxiety(score):

    if score <= 7:
        return 1
    elif score <= 9:
        return 2
    elif score <= 14:
        return 3
    elif score <= 19:
        return 4
    else:
        return 5


def classify_stress(score):

    if score <= 14:
        return 1
    elif score <= 18:
        return 2
    elif score <= 25:
        return 3
    elif score <= 33:
        return 4
    else:
        return 5

# ==========================================================
# Evaluación completa del cuestionario
# ==========================================================

def evaluate_questionnaire(data):
    """
    Evalúa completamente el cuestionario DASS-21.

    Retorna:
        - Puntaje
        - Código
        - Nivel
        - Recomendación
        - Disclaimer
    """

    scores = calculate_scores(data)

    depression_code = classify_depression(
        scores["depression"]
    )

    anxiety_code = classify_anxiety(
        scores["anxiety"]
    )

    stress_code = classify_stress(
        scores["stress"]
    )

    return {

        "questionnaire": {

            "depression": {

                "score": scores["depression"],

                "code": depression_code,

                "level": LEVELS[depression_code],

                "recommendation": RECOMMENDATIONS[depression_code]

            },

            "anxiety": {

                "score": scores["anxiety"],

                "code": anxiety_code,

                "level": LEVELS[anxiety_code],

                "recommendation": RECOMMENDATIONS[anxiety_code]

            },

            "stress": {

                "score": scores["stress"],

                "code": stress_code,

                "level": LEVELS[stress_code],

                "recommendation": RECOMMENDATIONS[stress_code]

            }

        },

        "disclaimer": DISCLAIMER

    }