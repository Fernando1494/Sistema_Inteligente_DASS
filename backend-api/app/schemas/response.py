from pydantic import BaseModel


# ==========================================================
# Resultado del modelo ML
# ==========================================================

class PredictionResult(BaseModel):

    code: int

    level: str


# ==========================================================
# Resultado del cuestionario DASS-21
# ==========================================================

class QuestionnaireResult(BaseModel):

    score: int

    code: int

    level: str

    recommendation: str


# ==========================================================
# Agrupación del cuestionario
# ==========================================================

class QuestionnaireResponse(BaseModel):

    depression: QuestionnaireResult

    anxiety: QuestionnaireResult

    stress: QuestionnaireResult


# ==========================================================
# Agrupación de las predicciones ML
# ==========================================================

class PredictionGroup(BaseModel):

    depression: PredictionResult

    anxiety: PredictionResult

    stress: PredictionResult


# ==========================================================
# Respuesta completa de la API
# ==========================================================

class PredictionResponse(BaseModel):

    questionnaire: QuestionnaireResponse

    prediction: PredictionGroup

    disclaimer: str