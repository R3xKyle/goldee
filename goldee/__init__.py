from flask import Flask

from config import app_create
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail

application = app_create(__name__)
db = SQLAlchemy(application)
mail = Mail(application)

from goldee.sweep import DatabaseSweep
DatabaseSweep()

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

