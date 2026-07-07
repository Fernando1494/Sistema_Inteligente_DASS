"""
Servicio encargado de realizar las predicciones utilizando
los modelos de Machine Learning entrenados.
"""

import pandas as pd

from app.core.constants import FEATURE_COLUMNS, LEVELS

from app.core.model_loader import (
    depression_model,
    anxiety_model,
    stress_model
)

from app.services.questionnaire import (
    evaluate_questionnaire
)


def predict(data: dict) -> dict:
    """
    Realiza:

    1. Evaluación oficial del DASS-21
    2. Predicción mediante Machine Learning
    """

    # ==========================================================
    # Evaluación oficial DASS-21
    # ==========================================================

    questionnaire_result = evaluate_questionnaire(data)

    # ==========================================================
    # Crear DataFrame
    # ==========================================================

    df = pd.DataFrame(
        [data],
        columns=FEATURE_COLUMNS
    )

    # ==========================================================
    # Predicciones ML
    # ==========================================================

    depression_prediction = int(
        depression_model.predict(df)[0]
    )

    anxiety_prediction = int(
        anxiety_model.predict(df)[0]
    )

    stress_prediction = int(
        stress_model.predict(df)[0]
    )

    prediction_result = {

        "depression": {

            "code": depression_prediction,

            "level": LEVELS[depression_prediction]

        },

        "anxiety": {

            "code": anxiety_prediction,

            "level": LEVELS[anxiety_prediction]

        },

        "stress": {

            "code": stress_prediction,

            "level": LEVELS[stress_prediction]

        }

    }

    # ==========================================================
    # Resultado final
    # ==========================================================

    return {

        **questionnaire_result,

        "prediction": prediction_result

    }