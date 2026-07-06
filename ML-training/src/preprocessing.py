import pandas as pd

# ==========================================
# 1. Cargar el dataset
# ==========================================

ruta = "data/raw/DASS.csv"

df = pd.read_csv(ruta)

print("=" * 50)
print("DATASET CARGADO CORRECTAMENTE")
print("=" * 50)

# ==========================================
# 2. Información general
# ==========================================

print("\nPrimeras 5 filas:\n")
print(df.head())

print("\nInformación del dataset:\n")
print(df.info())

print("\nDimensiones del dataset:")
print(df.shape)

# ==========================================
# 3. Valores nulos
# ==========================================

print("\nValores nulos por columna:\n")
print(df.isnull().sum())

# ==========================================
# 4. Registros duplicados
# ==========================================

duplicados = df.duplicated().sum()

print(f"\nRegistros duplicados: {duplicados}")

# ==========================================
# 5. Eliminar registros duplicados
# ==========================================

df = df.drop_duplicates()

print("\nDimensiones después de eliminar duplicados:")
print(df.shape)

# ==========================================
# 6. Guardar dataset limpio
# ==========================================

ruta_salida = "data/processed/DASS_clean.csv"

df.to_csv(ruta_salida, index=False)

print("\nDataset limpio guardado correctamente.")
print(f"Ubicación: {ruta_salida}")