# Sistema Inteligente DASS

Sistema inteligente basado en Machine Learning para la detección temprana del riesgo de depresión, ansiedad y estrés mediante el cuestionario DASS-21.

Este proyecto forma parte de una tesis de Ingeniería de Sistemas y está compuesto por un módulo de entrenamiento de modelos de Machine Learning y una API desarrollada con FastAPI para realizar predicciones.

---

# Objetivo

Desarrollar un sistema inteligente capaz de estimar el nivel de riesgo de depresión, ansiedad y estrés utilizando el cuestionario DASS-21 y modelos de Machine Learning previamente entrenados.

---

# Arquitectura del proyecto

```
Sistema_Inteligente_DASS/
│
├── ML-training/          # Entrenamiento de modelos
│
├── backend-api/          # API REST con FastAPI
│
└── README.md
```

---

# Componentes

## ML-training

Contiene todo el proceso relacionado con Machine Learning.

- Preprocesamiento del dataset
- Entrenamiento de modelos
- Evaluación
- Generación de modelos (.pkl)
- Dataset procesado

Modelos entrenados:

- Depresión
- Ansiedad
- Estrés

---

## backend-api

API REST desarrollada con FastAPI.

Funciones principales:

- Recepción de respuestas del cuestionario DASS-21
- Cálculo del puntaje oficial DASS-21
- Clasificación según el instrumento oficial
- Predicción mediante Machine Learning
- Recomendaciones según el nivel obtenido
- Respuesta en formato JSON

---

# Tecnologías utilizadas

## Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib
- Matplotlib

## Backend

- FastAPI
- Uvicorn
- Pydantic

## Control de versiones

- Git
- GitHub

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/Fernando1494/Sistema_Inteligente_DASS.git
```

---

## Instalar dependencias

### ML-training

```bash
pip install -r ML-training/requirements.txt
```

### Backend

```bash
pip install -r backend-api/requirements.txt
```

---

# Ejecución del backend

Ubicarse dentro de:

```
backend-api
```

Ejecutar:

```bash
uvicorn app.main:app --reload
```

La documentación estará disponible en:

```
http://127.0.0.1:8000/docs
```

---

# Dataset

El archivo original **DASS.csv** no se incluye en este repositorio.

La carpeta:

```
ML-training/data/raw/
```

contiene un README con las instrucciones para descargar el dataset y colocarlo en la ubicación correcta.

---

# Dataset utilizado

DASS-21 Dataset

DOI:

10.17632/br82d4xkj7.1

---

# Aviso

Este sistema constituye una herramienta de apoyo para la detección temprana del riesgo de depresión, ansiedad y estrés.

Los resultados obtenidos no constituyen un diagnóstico clínico y no sustituyen la evaluación realizada por un profesional de la salud mental.

---

# Autor

Fernando Gianfranco Enriquez Ventura

Tesis de Ingeniería de Sistemas