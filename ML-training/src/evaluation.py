from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report,
    ConfusionMatrixDisplay
)


# ==========================================================
# Calcular métricas
# ==========================================================

def evaluate_model(y_test, y_pred):

    return {

        "Accuracy": accuracy_score(y_test, y_pred),

        "Precision": precision_score(
            y_test,
            y_pred,
            average="weighted",
            zero_division=0
        ),

        "Recall": recall_score(
            y_test,
            y_pred,
            average="weighted",
            zero_division=0
        ),

        "F1-Score": f1_score(
            y_test,
            y_pred,
            average="weighted",
            zero_division=0
        )

    }


# ==========================================================
# Classification Report
# ==========================================================

def save_classification_report(
        y_test,
        y_pred,
        output_folder
):

    output_folder = Path(output_folder)

    output_folder.mkdir(
        parents=True,
        exist_ok=True
    )

    report = classification_report(
        y_test,
        y_pred,
        digits=4
    )

    archivo = output_folder / "classification_report.txt"

    with open(
        archivo,
        "w",
        encoding="utf-8"
    ) as f:

        f.write(report)

    print("✔ Classification Report guardado")


# ==========================================================
# Matriz de confusión
# ==========================================================

def save_confusion_matrix(
        y_test,
        y_pred,
        output_folder,
        model_name
):

    output_folder = Path(output_folder)

    output_folder.mkdir(
        parents=True,
        exist_ok=True
    )

    cm = confusion_matrix(
        y_test,
        y_pred
    )

    disp = ConfusionMatrixDisplay(cm)

    fig, ax = plt.subplots(
        figsize=(7, 6)
    )

    disp.plot(
        ax=ax,
        cmap="Blues",
        colorbar=False
    )

    plt.title(model_name)

    plt.tight_layout()

    archivo = output_folder / "confusion_matrix.png"

    plt.savefig(
        archivo,
        dpi=300
    )

    plt.close()

    print("✔ Matriz de confusión guardada")


# ==========================================================
# Guardar métricas
# ==========================================================

def save_metrics(
        metrics,
        output_folder
):

    output_folder = Path(output_folder)

    output_folder.mkdir(
        parents=True,
        exist_ok=True
    )

    df = pd.DataFrame(
        [metrics]
    )

    archivo = output_folder / "metrics.csv"

    df.to_csv(
        archivo,
        index=False
    )

    print("✔ Métricas guardadas")


# ==========================================================
# Evaluación completa
# ==========================================================

def generate_report(
        y_test,
        y_pred,
        metrics,
        output_folder,
        model_name
):

    save_metrics(
        metrics,
        output_folder
    )

    save_classification_report(
        y_test,
        y_pred,
        output_folder
    )

    save_confusion_matrix(
        y_test,
        y_pred,
        output_folder,
        model_name
    )