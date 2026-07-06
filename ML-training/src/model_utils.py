import time
import joblib

from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from evaluation import evaluate_model


def train_model(model, X_train, X_test, y_train, y_test):
    """
    Entrena un modelo y devuelve sus métricas.
    """

    inicio = time.time()

    model.fit(X_train, y_train)

    tiempo = time.time() - inicio

    y_pred = model.predict(X_test)

    metricas = evaluate_model(
        y_test,
        y_pred
    )

    resultados = {

        "Accuracy": metricas["Accuracy"],

        "Precision": metricas["Precision"],

        "Recall": metricas["Recall"],

        "F1-Score": metricas["F1-Score"],

        "Tiempo": tiempo,

        "Modelo": model,

        "Predicciones": y_pred

    }

    return resultados

def logistic_regression():

    return Pipeline([
        ("scaler", StandardScaler()),
        ("model", LogisticRegression(
            max_iter=2000,
            random_state=42
        ))
    ])


def decision_tree():

    return DecisionTreeClassifier(
        random_state=42
    )


def random_forest():

    return RandomForestClassifier(
        n_estimators=100,
        random_state=42
    )

def save_model(model, path):
    """
    Guarda un modelo entrenado en formato .pkl
    """

    joblib.dump(model, path)

    print(f"\nModelo guardado correctamente:")
    print(path)