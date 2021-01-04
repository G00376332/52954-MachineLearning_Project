""" 
Machine Learning and Statistic Project 2020
server.py
Student: Maciej Burel
Student ID: G00376332
------------------------------------------------------------------------

This server.py is the part of MLS Project.


Program is designed to work with folowing model files:

 - neuron.h5
 - neuron.json
 - poly.sav

"""
from flask import Flask
import numpy as np
# To resolve issue with keras errors and warnings we have to disable logging messages  
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # or any {'0', '1', '2'}
import logging
logging.getLogger('tensorflow').disabled = True

import tensorflow as tf
from tensorflow import keras
from sklearn.linear_model import LinearRegression 
from sklearn.preprocessing import PolynomialFeatures 
# To import models from file
import joblib

# To resolve issue with keras model we have to load model to the same session 
session = tf.Session(graph=tf.Graph())
with session.graph.as_default():
  keras.backend.set_session(session)
  # Load neuron model from json file which was saved durring model evaluation in jupyter notebook
  json_file = open('neuron.json', 'r')
  loaded_model_json = json_file.read()
  json_file.close()
  m2 = keras.models.model_from_json(loaded_model_json)
  # Load weights into new model
  m2.load_weights("neuron.h5")
  print("Loaded neuron model from file")

# Load polynomial regression model from file which was saved durring model evaluation in jupyter notebook
poly = PolynomialFeatures(degree = 10)
filename = 'poly.sav'
model = joblib.load(filename)
print("Loaded poly model from file")

# Create the Flask app
app = Flask(__name__,
            static_url_path='',
            static_folder='static')

@app.route("/")
def home():
  return app.send_static_file('index.html')

# NN api response
# curl http://127.0.0.1:5000/api/outputnn/12.52
@app.route('/api/outputnn/<speed>')
def outputnn(speed):
   s = float(speed)
   return {"outputnn" : nn_output(s)}

#Poly api response
# curl http://127.0.0.1:5000/api/outputpoly/12.52
@app.route('/api/outputpoly/<speed>')
def outputpoly(speed):
   s = float(speed)
   return {"outputpoly" : poly_output(s)}

def nn_output(speed):

  with session.graph.as_default():
    keras.backend.set_session(session) 
    try:
      if speed > 0 and speed < 26:
        s = np.array([speed])
        r_neuron = m2.predict(s.tolist()).tolist()
        return np.round(r_neuron,2).tolist()
      else:
        return 0
    except:
      return("Model Error")

#Run Flask
if __name__ == '__main__' :
    app.run(debug= True)