from fastapi import APIRouter

from app.schemas.request import PredictionRequest
from app.schemas.response import PredictionResponse

from app.services.prediction_service import predict

router = APIRouter()


# ==========================================================
# Ruta principal
# ==========================================================

@router.get("/")
def root():

    return {
        "message": "Sistema Inteligente DASS API funcionando correctamente."
    }


# ==========================================================
# Predicción
# ==========================================================

@router.post(
    "/predict",
    response_model=PredictionResponse
)
def predict_risk(request: PredictionRequest):

    resultado = predict(
        request.model_dump()
    )

    return resultado