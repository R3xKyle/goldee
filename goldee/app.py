from flask import Flask

from flask_sqlalchemy import SQLAlchemy
import authentication
from __init__ import application, db

#application = Flask(__name__)
#application.config['SQLALCHEMY_DATABASE_URI'] = db_url
#db = SQLAlchemy(application)


from models import User

def main(): 
	k = User()
	k.FirstName = 'Bobs'
	k.LastName = 'Smiths'
	k.Email = 'Bobsmithsss@aol.com'
	k.HashValue = authentication.generate_hash("eiffel")
	k.Zip = 92545
	k.Address1 = 'Yess'
	k.City = 'Yess'
	k.State = 'YA'
	k.Picture = 'Yes.yasssssssssssssss'
	#db.session.add(k)
	#db.session.commit()


if __name__ == "__main__":
	main()
	#app.run()


# Need to close the session after each request or application context shutdown
@application.teardown_appcontext
def shutdown_session(exception=None):
	db_session.remove()
