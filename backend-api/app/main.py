from fastapi import FastAPI

from app.api.routes import router

app = FastAPI(

    title="Sistema Inteligente DASS",

    version="1.0",

    description="API para la detección temprana de depresión, ansiedad y estrés mediante Machine Learning."

)

app.include_router(router)