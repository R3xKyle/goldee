from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from authentication import login_manager

import credentials
from database import testDBEverything
from models import db

db_url = 'mysql+pymysql://{0}:{1}@goldeedb.crkebn7vcqw4.us-west-1.rds.amazonaws.com:3306/goldee'.format(credentials.username, credentials.password)
UPLOAD_FOLDER = 'images'

application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = db_url
application.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
with application.app_context():
	db.init_app(application)
	db.app = application
login_manager.init_app(application)

from views.auth import AuthenticationBP
from views.user import UserBP
from views.index import IndexBP

application.register_blueprint(IndexBP, template_folder = 'templates')
application.register_blueprint(AuthenticationBP, template_folder = 'templates')
application.register_blueprint(UserBP, template_folder = 'templates')
application.app_context().push()


def main():
	#testDBEverything()


if __name__ == "__main__":
	main()
	#app.run()


# Need to close the session after each request or application context shutdown
@application.teardown_appcontext
def shutdown_session(exception=None):
	db.session.remove()
