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

# Create a new web app.
app = fl.Flask(__name__)

# Add root route.
@app.route("/")
def home():
  return app.send_static_file('index.html')

# Add uniform route.
@app.route('/api/uniform')
def uniform():
  return {"value": np.random.uniform()}

# Add normal route.
@app.route('/api/normal')
def normal():
  return {"value": np.random.normal()}