from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router


app = FastAPI(

    title="Sistema Inteligente DASS",

    version="1.0",

    description="API para la detección temprana de depresión, ansiedad y estrés mediante Machine Learning."

)

# =====================================================
# CONFIGURACIÓN CORS
# =====================================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://127.0.0.1:5500",
        "http://localhost:5500",

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

# =====================================================
# RUTAS
# =====================================================

app.include_router(router)