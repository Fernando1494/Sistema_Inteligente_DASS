from pathlib import Path

# ==========================================================
# INFORMACIÓN DEL PROYECTO
# ==========================================================

PROJECT_NAME = "Sistema Inteligente DASS"

VERSION = "1.0"

# ==========================================================
# PARÁMETROS GENERALES
# ==========================================================

RANDOM_STATE = 42

TEST_SIZE = 0.20

# ==========================================================
# VARIABLES OBJETIVO
# ==========================================================

TARGETS = {
    "depression": "Depression_Level",
    "anxiety": "Anxiety_Level",
    "stress": "Stress_Level"
}

# ==========================================================
# DIRECTORIOS
# ==========================================================

BASE_DIR = Path(__file__).resolve().parent.parent

DATA_DIR = BASE_DIR / "data"

MODELS_DIR = BASE_DIR / "models"

REPORTS_DIR = BASE_DIR / "reports"

RESULTS_DIR = BASE_DIR / "results"

# ==========================================================
# DATASETS
# ==========================================================

RAW_DATA = DATA_DIR / "raw" / "DASS.csv"

PROCESSED_DATA = DATA_DIR / "processed" / "DASS_clean.csv"

# ==========================================================
# REPORTES
# ==========================================================

DEPRESSION_REPORTS = REPORTS_DIR / "depression"

ANXIETY_REPORTS = REPORTS_DIR / "anxiety"

STRESS_REPORTS = REPORTS_DIR / "stress"

# ==========================================================
# CREAR CARPETAS AUTOMÁTICAMENTE
# ==========================================================

folders = [

    DATA_DIR,

    MODELS_DIR,

    REPORTS_DIR,

    RESULTS_DIR,

    DEPRESSION_REPORTS,

    ANXIETY_REPORTS,

    STRESS_REPORTS

]

for folder in folders:

    folder.mkdir(parents=True, exist_ok=True)