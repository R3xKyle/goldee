import sys
sys.path.append("..")

from flask import Flask
from flask_cors import CORS
from flask_login import LoginManager
from flask import send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect

from goldee.authentication import login_manager
from goldee.credentials import databaseURI, username, password, secretKey
from goldee.models import db
from goldee.sweep import DatabaseSweep

db_url = 'mysql+pymysql://{0}:{1}@{2}'.format(username, password, databaseURI)
UPLOAD_FOLDER = 'images'

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


application = CustomFlask(__name__, static_folder='frontEndFiles/dist/static')

application.config['SQLALCHEMY_DATABASE_URI'] = db_url
application.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
application.config['SECRET_KEY'] = secretKey
with application.app_context():
	db.init_app(application)
	db.app = application
application.app_context().push()
login_manager.init_app(application)


CSRFProtect(application)
CORS(application)

#from goldee.database import testDBEverything
#from goldee.views.auth import AuthenticationBP
#from goldee.views.user import UserBP
from goldee.views.post import PostBP
from goldee.views.index import IndexBP

application.register_blueprint(IndexBP)
#application.register_blueprint(AuthenticationBP, template_folder = 'templates', url_prefix = '/auth')
#application.register_blueprint(UserBP, template_folder = 'templates', url_prefix = '/user')
application.register_blueprint(PostBP, url_prefix = '/post')


def main():
	print("Imports work")
	#testDBEverything()

@application.teardown_request
def teardown_request(exception):
	if exception:
		with application.app_context():
			db.session.rollback()
			db.session.remove()
	db.session.remove()

# Need to close the session after each request or application context shutdown
@application.teardown_appcontext
def shutdown_session(exception=None):
	db.session.remove()

if __name__ == "__main__":
	#main()
	#DatabaseSweep()
	application.run()
