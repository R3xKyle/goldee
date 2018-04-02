# Inits the views package

from flask_wtf.csrf import CSRFProtect

from __init__ import app

# Adds CSRF protection to flask app
CSRFProtect(app)