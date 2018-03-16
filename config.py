import os
from flask import Flask
from flask_cors import CORS

from goldee.credentials import databaseURI, username, password, secretKey

#db_url = 'mysql+pymysql://{0}:{1}@{2}'.format(username, password, databaseURI)
db_url = f'mysql+pymysql://{username}:{password}@{databaseURI}' #this is for python 3

class Config(object):
	SQLALCHEMY_DATABASE_URI = db_url
	SECRET_KEY = os.environ.get('SECRET_KEY') or secretKey
	
	DEFAULT_ZIP_CODE = 93410
	POSTS_PER_PAGE = 5
	FEED_ZIP_TOLERANCE = 20

	#flask-mail
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 587
	MAIL_USE_SSL = False
	MAIL_USERNAME = f'{username}'
	MAIL_PASSWORD = f'{password}'
	MAIL_USE_TLS = True
	DEFAULT_MAIL_SENDER='Goldee'


class CustomFlask(Flask):
	jinja_options = Flask.jinja_options.copy()
	jinja_options.update(dict(
	 block_start_string='[[',
	 block_end_string=']]',
	 variable_start_string='((',
	 variable_end_string='))',
	 comment_start_string="{\#",
	 comment_end_string="\#}",
	))

def app_create(name):
	application = CustomFlask(name, static_folder = 'frontEndFiles')
	application.config.from_object(Config)
	CORS(application)
	return application
