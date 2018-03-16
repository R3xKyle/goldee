# Inits the views package

from flask_wtf.csrf import CSRFProtect

from goldee import application

# Adds CSRF protection to flask application
CSRFProtect(application)