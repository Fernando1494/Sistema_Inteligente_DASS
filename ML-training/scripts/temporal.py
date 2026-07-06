import pandas as pd

df = pd.read_csv("data/processed/DASS_clean.csv")

print("DEPRESIÓN")
print(df.groupby("Depression_Level")["Depression_Score"].agg(["min", "max"]))

print("\nANSIEDAD")
print(df.groupby("Anxiety_Level")["Anxiety_Score"].agg(["min", "max"]))

print("\nESTRÉS")
print(df.groupby("Stress_Level")["Stress_Score"].agg(["min", "max"]))