# This is where the flask app lives
from flask import Flask

from config import app_create
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail

# Creates the app with configuration options specified in Config.py
app = app_create(__name__)
# Bind SQLAlchemy db instance to flask app
db = SQLAlchemy(app)
# Bind Mail instance to flask app
mail = Mail(app)

# Starts the database sweep that runs every day
from sweep import DatabaseSweep
DatabaseSweep()

# Imports the database models and all router connections for app
# At bottom to help avoid any circular imports
import models, router

@app.teardown_request
def teardown_request(exception):
	if exception:
		db.session.rollback()
		db.session.remove()
	db.session.remove()

# Need to close the session after each request or app context shutdown
@app.teardown_appcontext
def shutdown_session(exception=None):
	if exception:
		db.session.rollback()
		db.session.remove()

