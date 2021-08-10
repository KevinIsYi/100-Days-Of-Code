# Preplantilla de Pre Procesado

# Libraries
import numpy as np # numbers treatment
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, LabelEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
# from sklearn import preprocessing

dataset = pd.read_csv('Data.csv')
x = dataset.iloc[:, :-1].values # index localization
y = dataset.iloc[:, -1].values

# : from beginning to end
# :-1 Take all but the last one

# NA Treatment
imputer = SimpleImputer(missing_values = np.nan, strategy = 'mean');
imputer = imputer.fit(x[:, 1:3]); # All rows and Column 1 and 2
x[:, 1:3] = imputer.transform(x[:, 1:3])
# 0 = col, 1 = row

# Transform categorical variables to values
# le_X = preprocessing.LabelEncoder()
# x[:, 0] = le_X.fit_transform(x[:, 0])
# All files - first column

ct = ColumnTransformer(
    [('one_hot_encoder', OneHotEncoder(categories='auto'), [0])],   
    remainder='passthrough'                        
)
x = np.array(ct.fit_transform(x), dtype = float)

y = LabelEncoder().fit_transform(y)

# Split dataset training | test

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.20, random_state = 0)

# Variables Escaleting
sc_x = StandardScaler()
x_train = sc_x.fit_transform(x_train)
x_test = sc_x.transform(x_test)



