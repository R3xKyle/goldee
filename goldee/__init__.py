# This is where the flask application lives
from flask import Flask

from config import app_create
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail

# Creates the application with configuration options specified in Config.py
application = app_create(__name__)
# Bind SQLAlchemy db instance to flask application
db = SQLAlchemy(application)
# Bind Mail instance to flask application
mail = Mail(application)
mail.init_app(application)

# Starts the database sweep that runs every day
from goldee.sweep import DatabaseSweep
DatabaseSweep()

# Imports the database models and all router connections for application
# At bottom to help avoid any circular imports
from goldee import models, router

@application.teardown_request
def teardown_request(exception):
	if exception:
		db.session.rollback()
		db.session.remove()
	db.session.remove()

# Need to close the session after each request or application context shutdown
@application.teardown_appcontext
def shutdown_session(exception=None):
	if exception:
		db.session.rollback()
		db.session.remove()

