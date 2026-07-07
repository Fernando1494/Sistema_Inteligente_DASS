## Dataset

El dataset original **no se incluye** en este repositorio por motivos de licencia y buenas prácticas de distribución.

Para ejecutar el entrenamiento:

1. Descargue el dataset desde la fuente oficial.
2. Coloque el archivo `DASS.csv` en:

```
ML-training/data/raw/
```

3. Ejecute:

```bash
python src/preprocessing.py
```

Esto generará automáticamente el archivo:

```
ML-training/data/processed/DASS_clean.csv
```