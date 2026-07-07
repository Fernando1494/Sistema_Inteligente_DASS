# Dataset DASS-21

Esta carpeta debe contener el archivo original del dataset utilizado durante el entrenamiento de los modelos de Machine Learning.

## Archivo esperado

```
DASS.csv
```

Ruta:

```
ML-training/data/raw/DASS.csv
```

---

# ¿Por qué no se incluye el dataset?

El archivo **DASS.csv** no forma parte de este repositorio.

Aunque el dataset es de acceso público para investigación, se decidió no distribuir una copia dentro del repositorio por las siguientes razones:

- Respetar las condiciones de distribución establecidas por sus autores.
- Facilitar el mantenimiento del proyecto utilizando la fuente oficial.
- Mantener el repositorio más liviano.

---

# Descarga

El dataset puede descargarse desde el repositorio oficial de Mendeley Data.

DOI:

```
10.17632/br82d4xkj7.1
```

Enlace oficial:

https://data.mendeley.com/datasets/br82d4xkj7/1

---

# Instrucciones

1. Descargar el dataset desde el enlace oficial.
2. Extraer el archivo.
3. Copiar **DASS.csv** dentro de esta carpeta.

La estructura final debe ser:

```
ML-training/
└── data/
    └── raw/
        ├── DASS.csv
        └── README.md
```

---

# Importante

El resto del proyecto espera encontrar el dataset exactamente con el nombre:

```
DASS.csv
```

Modificar el nombre o la ubicación del archivo puede provocar errores durante el preprocesamiento y entrenamiento de los modelos.