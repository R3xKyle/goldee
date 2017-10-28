# This file initializes your application and brings together all of the various components.
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from database import db_url
application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = db_url
db = SQLAlchemy(application)