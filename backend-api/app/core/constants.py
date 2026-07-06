"""
Constantes globales del sistema.
"""

# ==========================================================
# Niveles de clasificación DASS-21
# ==========================================================

LEVELS = {
    1: "Normal",
    2: "Leve",
    3: "Moderado",
    4: "Severo",
    5: "Extremadamente severo"
}

# ==========================================================
# Orden de las variables de entrada del modelo
# (Debe ser exactamente el mismo que se usó durante el entrenamiento)
# ==========================================================

FEATURE_COLUMNS = [

    # Datos demográficos
    "Q1_1",
    "Q1_2",
    "Q1_3",
    "Q1_4",
    "Q1_5",
    "Q1_6",

    # Estrés
    "Q3_1_S1",
    "Q3_2_S2",
    "Q3_3_S3",
    "Q3_4_S4",
    "Q3_5_S5",
    "Q3_6_S6",
    "Q3_7_S7",

    # Ansiedad
    "Q3_8_A1",
    "Q3_9_A2",
    "Q3_10_A3",
    "Q3_11_A4",
    "Q3_12_A5",
    "Q3_13_A6",
    "Q3_14_A7",

    # Depresión
    "Q3_15_D1",
    "Q3_16_D2",
    "Q3_17_D3",
    "Q3_18_D4",
    "Q3_19_D5",
    "Q3_20_D6",
    "Q3_21_D7"

]