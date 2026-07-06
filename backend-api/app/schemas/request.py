from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):

    # ==========================================================
    # Datos demográficos
    # ==========================================================

    Q1_1: int = Field(..., description="Edad")

    Q1_2: int = Field(..., ge=1, le=2, description="Sexo")

    Q1_3: int = Field(..., ge=0, le=1, description="Estado civil")

    Q1_4: int = Field(..., ge=1, le=5, description="Nivel educativo")

    Q1_5: int = Field(..., ge=1, le=6, description="Situación ocupacional")

    Q1_6: int = Field(..., ge=0, le=1, description="Problemas para dormir")

    # ==========================================================
    # Estrés
    # ==========================================================

    Q3_1_S1: int = Field(..., ge=0, le=3)
    Q3_2_S2: int = Field(..., ge=0, le=3)
    Q3_3_S3: int = Field(..., ge=0, le=3)
    Q3_4_S4: int = Field(..., ge=0, le=3)
    Q3_5_S5: int = Field(..., ge=0, le=3)
    Q3_6_S6: int = Field(..., ge=0, le=3)
    Q3_7_S7: int = Field(..., ge=0, le=3)

    # ==========================================================
    # Ansiedad
    # ==========================================================

    Q3_8_A1: int = Field(..., ge=0, le=3)
    Q3_9_A2: int = Field(..., ge=0, le=3)
    Q3_10_A3: int = Field(..., ge=0, le=3)
    Q3_11_A4: int = Field(..., ge=0, le=3)
    Q3_12_A5: int = Field(..., ge=0, le=3)
    Q3_13_A6: int = Field(..., ge=0, le=3)
    Q3_14_A7: int = Field(..., ge=0, le=3)

    # ==========================================================
    # Depresión
    # ==========================================================

    Q3_15_D1: int = Field(..., ge=0, le=3)
    Q3_16_D2: int = Field(..., ge=0, le=3)
    Q3_17_D3: int = Field(..., ge=0, le=3)
    Q3_18_D4: int = Field(..., ge=0, le=3)
    Q3_19_D5: int = Field(..., ge=0, le=3)
    Q3_20_D6: int = Field(..., ge=0, le=3)
    Q3_21_D7: int = Field(..., ge=0, le=3)