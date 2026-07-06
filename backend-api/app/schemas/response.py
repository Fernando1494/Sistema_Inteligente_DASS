from pydantic import BaseModel


class PredictionResult(BaseModel):

    code: int

    level: str


class PredictionResponse(BaseModel):

    depression: PredictionResult

    anxiety: PredictionResult

    stress: PredictionResult