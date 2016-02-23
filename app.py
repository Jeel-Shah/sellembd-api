from flask import Flask, send_from_directory, request
from flask.ext.cors import CORS, cross_origin

from renderjs import generate_file

import os

app = Flask(__name__)

CORS(app)


@app.route('/api/<path:filename>')
@cross_origin()
def get_static(filename):
    root_dir = os.path.abspath(os.path.dirname(__file__))
    return send_from_directory(os.path.join(root_dir, 'static'), filename)


@app.route('/api/params')
@cross_origin()
def get_params():

    return "get_params"

if __name__ == '__main__':
    app.run(debug=True)
