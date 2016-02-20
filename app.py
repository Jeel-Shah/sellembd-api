from flask import Flask, jsonify, send_from_directory, request
from flask.ext.cors import CORS, cross_origin

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
    print(request.args)
    return "yo what's up?"

if __name__ == '__main__':
    app.run(debug=True)
