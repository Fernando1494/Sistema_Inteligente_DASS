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


def predict(data: dict) -> dict:
    """
    Realiza la predicción de:
        - Depresión
        - Ansiedad
        - Estrés

    Parámetros
    ----------
    data : dict
        Diccionario con las 27 variables de entrada.

    Retorna
    -------
    dict
        Resultado de las tres predicciones.
    """

    # ==========================================================
    # Crear DataFrame
    # ==========================================================

    df = pd.DataFrame(
        [data],
        columns=FEATURE_COLUMNS
    )

    # ==========================================================
    # Predicciones
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

    # ==========================================================
    # Resultado
    # ==========================================================

    result = {

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

    return result