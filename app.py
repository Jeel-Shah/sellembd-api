from flask import Flask, jsonify, send_from_directory
from flask.ext.cors import CORS, cross_origin

import os

app = Flask(__name__)

CORS(app)


videos = {
        "pagination": {
            "currentPage": 1,
            "totalItems": 11,
            "totalPages": 1,
            "limit": 20
        },
        "videos": [
            {
                "_id": "56ab903ecf96fbf0674ef4ee",
                "title": "2014 USBC Senior Masters - Stepladder Finals",
                "desc": "Watch the stepladder finals at the 2014 USBC Senior Masters. No. 1 seed Jack Jurek, No. 2 seed Walter Ray Williams Jr., No. 3 seed Pete Weber, No. 4 seed ...",
                "thumbnail": "https://i.ytimg.com/vi/qqmmThjDBvU/hqdefault.jpg",
                "youtubeId": "qqmmThjDBvU",
                "storeId": "56aa884af27bba3e32e7f8e5",
                "date": {
                    "created": "2016-01-29T16:15:58.340Z",
                    "modified": "2016-01-29T16:15:58.340Z"
                },
                "views": 0,
                "cdnUrls": [],
                "tags": [
                    {
                        "text": "youtube"
},
                    {
                        "text": "bowltv"
}
],
                "__v": 0
},
            {
                "_id": "56ab903ecf96fbf0674ef4f3",
                "title": "2015 ITRC Super Senior Classic - Qualifying Round 2",
                "desc": "Watch the second round of qualifying at the 2015 International Training and Research Center Super Senior Classic. Visit http://BOWL.com/SuperSenior for more ...",
                "thumbnail": "https://i.ytimg.com/vi/ABFYi43smI4/hqdefault.jpg",
                "youtubeId": "ABFYi43smI4",
                "storeId": "56aa884af27bba3e32e7f8e5",
                "date": {
                    "created": "2016-01-29T16:15:58.350Z",
                    "modified": "2016-01-29T16:15:58.350Z"
                },
                "views": 0,
                "cdnUrls": [],
                "tags": [
                    {
                        "text": "youtube"
},
                    {
                        "text": "bowltv"
}
],
                "__v": 0
},
            {
                "_id": "56ab903ecf96fbf0674ef4ef",
                "title": "2015 ITRC Super Senior Classic - Stepladder Finals",
                "desc": "Watch the stepladder finals of the 2015 International Training and Research Center Super Senior Classic in Green Bay featuring Tom Baker, Willie Wells, Sam ...",
                "thumbnail": "https://i.ytimg.com/vi/L_vMX4cGWco/hqdefault.jpg",
                "youtubeId": "L_vMX4cGWco",
                "storeId": "56aa884af27bba3e32e7f8e5",
                "date": {
                    "created": "2016-01-29T16:15:58.343Z",
                    "modified": "2016-01-29T16:15:58.343Z"
                },
                "views": 0,
                "cdnUrls": [],
                "tags": [
                    {
                        "text": "youtube"
},
                    {
                        "text": "bowltv"
}
],
                "__v": 0
}
        ]
    }

@app.route('/api/', methods=['GET'])
@cross_origin()
def get_ytvideos():
    return jsonify({'ytvideos' : videos})


@app.route('/api/<path:filename>')
@cross_origin()
def get_static(filename):
    print(request.args)
    root_dir = os.path.abspath(os.path.dirname(__file__))
    return send_from_directory(os.path.join(root_dir, 'static'), filename)



if __name__ == '__main__':
    app.run(debug=True)
