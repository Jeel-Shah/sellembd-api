from flask import Flask, send_from_directory, request, render_template
from flask.ext.cors import CORS, cross_origin

from renderjs import generate_file, generate_embed

import os

app = Flask(__name__)

CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/<path:filename>')
@cross_origin()
def get_static(filename):
    root_dir = os.path.abspath(os.path.dirname(__file__))
    return send_from_directory(os.path.join(root_dir, 'reference'), filename)


@app.route('/api/params', methods=['GET', 'POST'])
@cross_origin()
def get_params():
    content = request.get_json(force=True)
    pageId = content['pageId']
    youtubeId = content['youtubeId']
    title = content['title']
    desc = content['desc']
    random_number = content['random_number']
    imageId = content['imageId']

    file_path = generate_file(pageId, youtubeId, title, desc, random_number, imageId)

    embed_code = generate_embed(file_path)

    return embed_code

if __name__ == '__main__':
    app.run(debug=True, host="159.203.108.89", port=8000)
