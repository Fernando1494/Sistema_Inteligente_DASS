import pandas as pd

from sklearn.model_selection import train_test_split

from config import (
    PROCESSED_DATA,
    RESULTS_DIR,
    TARGETS,
    TEST_SIZE,
    RANDOM_STATE,
    DEPRESSION_REPORTS,
    ANXIETY_REPORTS,
    STRESS_REPORTS
)

from model_utils import (
    train_model,
    logistic_regression,
    decision_tree,
    random_forest,
    save_model
)

from evaluation import generate_report


def train_target(target_name):
    """
    Entrena los modelos para una variable objetivo.

    target_name:
        - depression
        - anxiety
        - stress
    """

    print("\n")
    print("=" * 60)
    print(f"ENTRENAMIENTO - {target_name.upper()}")
    print("=" * 60)

    # =====================================================
    # Cargar dataset
    # =====================================================

    df = pd.read_csv(PROCESSED_DATA)

    print("\nDataset cargado correctamente.")
    print(f"Registros: {len(df)}")

    # =====================================================
    # Variables predictoras
    # =====================================================

    X = df.drop(columns=[
        "Stress_Score",
        "Stress_Level",
        "Anxiety_Score",
        "Anxiety_Level",
        "Depression_Score",
        "Depression_Level"
    ])

    # =====================================================
    # Variable objetivo
    # =====================================================

    y = df[TARGETS[target_name]]

    print(f"Variables predictoras: {X.shape}")
    print(f"Variable objetivo: {y.shape}")

    # =====================================================
    # Seleccionar carpeta de reportes
    # =====================================================

    REPORT_PATHS = {

        "depression": DEPRESSION_REPORTS,

        "anxiety": ANXIETY_REPORTS,

        "stress": STRESS_REPORTS

    }

    report_folder = REPORT_PATHS[target_name]

    # =====================================================
    # División Train/Test
    # =====================================================

    X_train, X_test, y_train, y_test = train_test_split(

        X,

        y,

        test_size=TEST_SIZE,

        random_state=RANDOM_STATE,

        stratify=y

    )

    print("\nConjunto entrenamiento:", X_train.shape)
    print("Conjunto prueba:", X_test.shape)

    # =====================================================
    # Modelos
    # =====================================================

    modelos = [

        ("logistic_regression", logistic_regression()),

        ("decision_tree", decision_tree()),

        ("random_forest", random_forest())

    ]

    resultados = []

    mejor_modelo = None

    mejor_modelo_entrenado = None

    mejor_f1 = 0

    print("\n")
    print("=" * 60)
    print("ENTRENANDO MODELOS")
    print("=" * 60)

    # =====================================================
    # Entrenamiento
    # =====================================================

    for nombre, modelo in modelos:

        print(f"\nEntrenando {nombre}...")

        resultado = train_model(

            modelo,

            X_train,

            X_test,

            y_train,

            y_test

        )

        # ===============================================
        # Carpeta del algoritmo
        # ===============================================

        algorithm_folder = report_folder / nombre

        # ===============================================
        # Generar reportes
        # ===============================================

        generate_report(

            y_test=y_test,

            y_pred=resultado["Predicciones"],

            metrics={

                "Modelo": nombre,

                "Accuracy": resultado["Accuracy"],

                "Precision": resultado["Precision"],

                "Recall": resultado["Recall"],

                "F1-Score": resultado["F1-Score"],

                "Tiempo (s)": resultado["Tiempo"]

            },

            output_folder=algorithm_folder,

            model_name=nombre

        )

        resultados.append({

            "Modelo": nombre,

            "Accuracy": resultado["Accuracy"],

            "Precision": resultado["Precision"],

            "Recall": resultado["Recall"],

            "F1-Score": resultado["F1-Score"],

            "Tiempo (s)": resultado["Tiempo"]

        })

        if resultado["F1-Score"] > mejor_f1:

            mejor_f1 = resultado["F1-Score"]

            mejor_modelo = nombre

            mejor_modelo_entrenado = resultado["Modelo"]
    # =====================================================
    # Mostrar resultados
    # =====================================================

    resultados_df = pd.DataFrame(resultados)

    print("\n")
    print("=" * 60)
    print("RESULTADOS")
    print("=" * 60)

    print(resultados_df)

    print("\nMejor modelo:", mejor_modelo)
    print("Mejor F1-Score:", round(mejor_f1, 4))

    # =====================================================
    # Guardar CSV resumen
    # =====================================================

    archivo = RESULTS_DIR / f"{target_name}_results.csv"

    resultados_df.to_csv(

        archivo,

        index=False

    )

    print("\nResultados guardados en:")

    print(archivo)

    from config import MODELS_DIR

    modelo_path = MODELS_DIR / f"{target_name}_model.pkl"

    save_model(
        mejor_modelo_entrenado,
        modelo_path
    )

    return resultados_df