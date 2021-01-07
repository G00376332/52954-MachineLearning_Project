# GMIT Machine Learning and Statistic Project 2020

<img height="300" src="Images/logo.jpg">

This repository contains a final project for Machine Learning and Statistics in the semester 2020

[See here for the instructions](https://github.com/G00376332/52954-MachineLearning/blob/master/assessment.pdf)

## The main goal of the project

* The goal of this project is to produce a model that accurately predicts wind turbine power output from wind speed values, as in the data set powerproduction.csv.
* The part of the project is to create a web service that will respond with predicted power values based on speed values sent as HTTP requests.
* Research and investigations about wind energy production
* Solution and approaching for project task
* Implementation and presentation of the project results
* Final project should contain following elements:
   * Jupyter notebook that trains a model using the data set. In the notebook, it should be explained the model and an analysis of its accuracy.
   * Python script that runs a web service based on the model, as above.
   * Dockerfile to build and run the web service in a container.


## How to run review and run project

To theoretical part of the project where basic information and the way how model was trained are included the project.ipynb.
There are couple of option to view this jupyther notebook file:

   1. The file can be downloaded locally and run on the PC with Jupyter Notebook installed
   2. It can be viewed in the web browser on the [nbviewer](https://nbviewer.jupyter.org/github/G00376332/52954-MachineLearning/blob/main/Tasks.ipynb)
   3. Directly on the [GitHub](https://github.com/G00376332/52954-MachineLearning/blob/master/Tasks.ipynb)

### How to install Jupyter Notebook

The most convenient way to quickly install Jupyter Notebook is the use of Anaconda package.  
Anaconda conveniently installs Python, the Jupyter Notebook, and other commonly used packages for scientific computing and data science.

Use the following installation steps:

Download Anaconda. Is recommend downloading Anaconda’s latest Python 3 version (currently Python 3.9).
Install the version of Anaconda which was downloaded, following the instructions on the download page.

To run the notebook type in the cmd or commander:
 **jupyter notebook**

### How to run web service

The practical part includes below files:

| **File** | **Description** |
| --- | --- |
| server.py | Flask server application in python |
| poly.sav | Polynomial regression model |
| neuron.json | Neuron network model  |
| neuron.h5 | Neuron network weights for model |
| Dockerfile | Docker image recipe file |
| requirements.txt | Required files to run this project with a Flask in the virtual environment and for Docker  |
| Folder static| The folder that contains the website for the web server |
| Folder Data| The folder with CSV file that was used to train the model in the Jupyter Notebook |

Python package has to be present on the machine where this code will be run. The python version 3.7.9 was used for this project development.

Download or clone this repository to your PC.

To run code in the virtual environment:

#### Linux
```bash
pip install -r requirements.txt
export FLASK_APP=rando.py
python3 -m flask run
```

#### Windows
```bash
pip install -r requirements.txt
set FLASK_APP=rando.py
python -m flask run
```

To build and run it as a Docker image: 

```bash
docker build . -t rando-image
docker run --name rando-container -d -p 5000:5000 rando-image
```
### Web server

To access web service place address  http://127.0.0.1:5000 in the web browser.
This will redirect you to the home page of the project.
The web site contains basic information about used models for power prediction and the actual tool.
</br>

To get access to perdition tool please click on the appropriate tab in the menu.

<img height="300" src="Images/menu.jpg">

The tool window will pop up.

<img height="300" src="Images/tool.jpg">

Enter the wind speed in the range 1-25 and press power output button.
You will get prediction results for both models.

<img height="300" src="Images/toolpred.jpg">

It is also possible to check the result from the single model directly by web API. 
From CMD or any other console, you can send the request to each model using outputpoly or outputnn accordingly.

<img height="150" src="Images/console.jpg">

## References

1. [Jupyter - Installing Jupyter Notebook](https://jupyter.readthedocs.io/en/latest/install.html)
1. [Jupyter - nbviewer](https://nbviewer.jupyter.org/)
