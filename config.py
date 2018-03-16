import os
from flask import Flask
from flask_cors import CORS

from goldee.credentials import db_url, secretKey, email, emailPassword

# Class to configure Flask application
class Config(object):
	#sqlalchemy
	SQLALCHEMY_DATABASE_URI = db_url

	#Secret key
	SECRET_KEY = os.environ.get('SECRET_KEY') or secretKey
	
	# Feed
	DEFAULT_ZIP_CODE = 93410
	POSTS_PER_PAGE = 5
	FEED_ZIP_TOLERANCE = 20

	#flask-mail 
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 587
	MAIL_USE_SSL = False
	MAIL_USERNAME = email
	MAIL_PASSWORD = emailPassword
	MAIL_USE_TLS = True
	DEFAULT_MAIL_SENDER='Goldee'


class CustomFlask(Flask):
	# this changes jinja2 template syntax
	jinja_options = Flask.jinja_options.copy()
	jinja_options.update(dict(
	 block_start_string='[[',
	 block_end_string=']]',
	 variable_start_string='((',
	 variable_end_string='))',
	 comment_start_string="{\#",
	 comment_end_string="\#}",
	))

# Creates flask application and return
def app_create(name):
	application = CustomFlask(name, static_folder = 'frontEndFiles')
	application.config.from_object(Config) # configures the application with the Config object
	CORS(application) # Initializes CORS on our application to allow for communication between Flask and Vue
	return application
