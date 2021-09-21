import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

dataset = pd.read_csv('Salary_Data.csv')
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 1 / 3, random_state = 0)

# Crear modelo de regresión simple con conjunto de entrenamiento
regression = LinearRegression()
regression.fit(x_train, y_train) # Tienen que ser del mismo tamaño

# Predecir conjunto de test 
y_pred = regression.predict(x_test)

# Visualizar datos
"""
plt.scatter(x_train, y_train, color = "red") # eje X, eje Y
plt.plot(x_train, regression.predict(x_train), color = "blue")
plt.title("Sueldo vs Años de Experiencia (Conjunto de Entrenamiento")
plt.xlabel("Años de Experiencia")
plt.ylabel("Sueldo en $")
"""


plt.scatter(x_test, y_test, color = "red") # eje X, eje Y
plt.plot(x_train, regression.predict(x_train), color = "blue")
plt.title("Sueldo vs Años de Experiencia (Conjunto de Testing")
plt.xlabel("Años de Experiencia")
plt.ylabel("Sueldo en $")
plt.show()


