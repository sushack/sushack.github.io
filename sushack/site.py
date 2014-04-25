from flask import Flask
from flask import send_file
from flask.ext import restful


APP = Flask(__name__)

API = restful.Api(APP)


MOCK_ATTENDEES = [
    {
        'name': 'Max Glenister',
        'image_url':
            'http://www.gravatar.com/avatar/cb137dcc8b625d24ff5743a37075c839',
        'twitter_username': 'omgmog',
        'github_username': 'omgmog'
    },
    {
        'name': 'Gil Goncalves',
        'image_url':
            'http://www.gravatar.com/avatar/43d7035caeafc49de5d7568cbf73175e',
        'twitter_username': 'lurst'
    },
    {
        'name': 'Euan Goddard',
        'image_url':
            'http://www.gravatar.com/avatar/521784fd406e2e7abb27d6dfeecbd7c2',
        'github_username': 'euangoddard'
    }
]


@APP.route('/')
def index():
    return send_file('templates/index.html')


class get_attendees(restful.Resource):
    def get(self):
        return MOCK_ATTENDEES


API.add_resource(get_attendees, '/get_attendees')
