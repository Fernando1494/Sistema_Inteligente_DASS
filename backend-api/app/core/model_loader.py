from pathlib import Path
import joblib

# ==========================================
# Ruta de los modelos
# ==========================================

MODELS_DIR = Path(__file__).resolve().parent.parent.parent / "models"

# ==========================================
# Cargar modelos
# ==========================================

depression_model = joblib.load(
    MODELS_DIR / "depression_model.pkl"
)

anxiety_model = joblib.load(
    MODELS_DIR / "anxiety_model.pkl"
)

stress_model = joblib.load(
    MODELS_DIR / "stress_model.pkl"
)

print("=" * 50)
print("MODELOS CARGADOS CORRECTAMENTE")
print("=" * 50)